import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./partials/navbar";
import Footer from "./partials/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Weight Training Fitness — Custom Personalised Training Programs',
  description: 'Providing Personal Training for Over 10 Years in Camden, Oran Park, Cobbity, and Denham Court. Achieve your fitness goals with tailored weight training programs.',
  applicationName: 'Weight Training Fitness',
  keywords: [
    'personal training',
    'weight training Camden',
    'fitness programs Oran Park',
    'strength training Cobbity',
    'custom fitness plans',
    'personal trainer Denham Court',
    'online fitness coaching',
  ],
  authors: [{ name: 'Weight Training Fitness' }],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://www.weighttrainingfitness.com.au/',
    siteName: 'Weight Training Fitness',
    title: 'Weight Training Fitness — Custom Personalised Training Programs',
    description: 'Weight Training Fitness provides personalised weight training and fitness programs in Camden, Oran Park, Cobbity, and Denham Court. Expert guidance to help you achieve your goals.',
    images: [
      {
        url: 'https://www.weighttrainingfitness.com.au/images/wtf-ad.png',
        width: 1200,
        height: 630,
        alt: 'Weight Training Fitness - Personalised Fitness Programs',
        type: 'image/png',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nosnippet: false,
    noimageindex: false,
    noarchive: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: 'https://www.weighttrainingfitness.com.au/favicon.ico',
  },
  alternates: {
    canonical: 'https://www.weighttrainingfitness.com.au/',
    languages: {
      en: 'https://www.weighttrainingfitness.com.au/',
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
