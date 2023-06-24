import "../../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { i18n } from '@/i18n-config'
import Script from 'next/script'
import SideBar from "@/app/[lang]/components/sideBar";

import Link from "next/link";

export const metadata: Metadata = {
	title: {
		default: "globalstake.net",
		template: "%s | globalstake.net",
	},
	description: "Software engineer at upstash.com and founder of planetfall.io",
	openGraph: {
		title: "globalstake.net",
		description:
			"Software engineer at upstash.com and founder of planetfall.io",
		url: "https://globalstake.com",
		siteName: "globalstake.com",
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "GlobalStake",
		card: "summary_large_image",
	},
	icons: {
		shortcut: "/favicon.png",
	},
};
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const calSans = LocalFont({
	src: "../../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});
export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function Layout({children, params}: {
	children: React.ReactNode
	params: { lang: string }
}) {
	return (
		<html lang={params.lang} className={[inter.variable, calSans.variable].join(" ")}>
		<head>
			<meta name="theme-color" content="black"/>
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
			<meta name="viewport" content="width=device-width, viewport-fit=cover"/>
			<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet"/>
			<script src="https://kit.fontawesome.com/42d5adcbca.js" crossOrigin="anonymous"></script>
			<link href="/css/nucleo-icons.css" rel="stylesheet"/>
			<link href="/css/nucleo-svg.css" rel="stylesheet"/>
			<script src="https://unpkg.com/@popperjs/core@2"></script>
			<link href="/css/argon-dashboard-tailwind.css?v=1.0.1" rel="stylesheet"/>
		</head>
		<body className="m-0 font-sans text-base antialiased font-normal dark:bg-slate-900 leading-default bg-gray-50 text-slate-500">
		<div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>

		<SideBar/>
			{children}
		</body>

		<Script src="/js/plugins/perfect-scrollbar.min.js"/>
		<Script src="/js/argon-dashboard-tailwind.js?v=1.0.1"/>
		<Script src="/js/plugins/chartjs.min.js"/>

		</html>
	);
}
