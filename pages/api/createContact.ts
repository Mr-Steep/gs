import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';
import fs from 'fs';
import * as path from "path";


const prisma = new PrismaClient();

// Настройки SMTP-сервера для отправки писем
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secureProtocol: 'TLSv1_method',
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
    },
});

export default async function createContact(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const { email } = req.body;

    try {
        const existingContact = await prisma.contact.findUnique({
            where: { email },
        });

        if (existingContact) {
            return res.status(400).json({ error: 'Contact already exists' });
        }

        const contact = await prisma.contact.create({
            data: {
                email,
            },
        });
        const filePath = path.join(process.cwd(), 'pages/mail', 'welcome-email.html');

        const html = fs.readFileSync(filePath, 'utf8');        // Отправка приветственного письма
        const mailOptions = {
            from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
            to: email,
            subject: 'Welcome to Your Website',
            html: html,
        };

        transporter.sendMail(mailOptions)
            .then(e => {
                console.log(e)
            })
            .catch(e => {
                console.log(e)
            }

        );

        return res.status(200).json({ success: true, contact });
    } catch (error) {
        console.error(error);
        console.log(error);

        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
