import "../../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { i18n } from '@/i18n-config'

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

export default function RootLayout({children, params,}: {
	children: React.ReactNode
	params: { lang: string }
}) {
	return (
		<html lang={params.lang} className={[inter.variable, calSans.variable].join(" ")}>
		<head>
			<meta name="theme-color" content="black"/>
			<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
			<meta name="viewport" content="width=device-width, viewport-fit=cover"/>
		</head>
			<body className={`bg-black overflow-hidden ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
		{children}
		</body>
		</html>
	);
}
