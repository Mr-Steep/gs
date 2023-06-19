import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import fs from 'fs';
import * as path from "path";
import _logger from "next-auth/utils/logger";

const prisma = new PrismaClient();

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

export default async function createContact(req: NextApiRequest, res: NextApiResponse) {
    let locale = ''
    const referer = req.headers.referer;
    if (referer) {
        const url = new URL(referer);
        locale = url.pathname.split('/')[1]; // Извлекаем язык из URL-адреса
        if(!locale){
            return res.status(405).json({ error: 'Method Not Allowed' });
        }
    }


    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const { email } = req.body;
    try {
        const existingContact = await prisma.contact.findUnique({
            where: { email }
        });
        if (existingContact) {
            return res.status(400).json({ error: 'Contact already exists' });
        }
        const contact = await prisma.contact.create({
            data: {email}
        });
        const _path = 'pages/mail/' + locale
        const filePath = path.join(process.cwd(), _path, 'welcome-email.html');

        const html = fs.readFileSync(filePath, 'utf8');
        const mailOptions = {
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
            to: email,
            subject: 'Welcome to Global Stake',
            html: html,
        };
        await transporter.sendMail(mailOptions)
        return res.status(200).json({ success: true, contact });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}