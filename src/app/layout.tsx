import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";

import "../styles/globals.css";

import TheHeader from "@/components/layout/TheHeader";
import React from "react";

const source_sans_3 = Source_Sans_3({
	weight: ["400", "600", "700"],
	style: "normal",
	subsets: ["latin", "cyrillic"],
	variable: "--font-source-sans-3"
});

export const metadata: Metadata = {
	title: `Впуснете се в приключение с „69+ вълнуващи места за любов“`,
	description: `
    Осмелете се да откриете любовта на най-неочакваните места
    в свят, в който любовта не познава граници, „69+ вълнуващи места за любов“ ви кани на пътешествие,
    за да изследвате кътчетата на страстта и романтиката в среда, която никога не сте си представяли.
  `
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='bg'
			className={`${source_sans_3.variable} font-sans`}
		>
			<body className="min-w-[360px] w-full min-h-screen flex flex-col text-main text-base">
				<div id="backdrop" />
				<div id="overlay" />
				<header className="container flex w-full min-h-[130px] mb-16">
					<TheHeader />
				</header>
				<main className="container flex flex-col flex-grow justify-start items-center">
					{children}
				</main>
				<footer className="min-h-[50px] flex flex-col justify-between items-end mt-12">
					<div className='flex gap-x-6'>
						<a href="tel:+359885956435" className='block hover:underline text-sm lg:text-base'>
							<span>+359885956435</span>
						</a>
						<a href="mailto:supp.lovejourney69@abv.bg" className='block mr-4 hover:underline text-sm lg:text-base'>
							<span>supp.lovejourney69@abv.bg</span>
						</a>
					</div>
					<span className="block w-full h-1 bg-purple-600"/>
				</footer>
			</body>
		</html>
	);
}
