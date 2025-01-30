import type { Metadata } from 'next';
import {
	Bowlby_One,
	New_Amsterdam,
	Staatliches,
	Roboto_Condensed,
} from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const Bowlby = Bowlby_One({
	variable: '--font-bowlby',
	subsets: ['latin'],
	weight: '400',
});

const newAmsterdam = New_Amsterdam({
	variable: '--font-newAmsterdam',
	subsets: ['latin'],
	weight: '400',
});

const staatliches = Staatliches({
	variable: '--font-staatliches',
	subsets: ['latin'],
	weight: '400',
});

const robotoCondensed = Roboto_Condensed({
	variable: '--font-robotoCondensed',
	subsets: ['latin'],
	weight: '400',
});

export const metadata: Metadata = {
	title: 'Adopte un cube',
	description: 'Site vitrine de la communauté Adopte un cube',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${newAmsterdam.variable} ${Bowlby.variable} ${staatliches.variable} ${robotoCondensed.variable} antialiased overflow-hidden relative h-screen w-screen`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
