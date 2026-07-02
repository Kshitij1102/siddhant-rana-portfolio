import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mind Balance Sports Psychology | Siddhant Rana",
  description:
    "Evidence-based sports psychology, mental performance coaching, confidence building, resilience training, psychological testing, and performance enhancement for athletes.",

  keywords: [
    "Sports Psychologist",
    "Sports Psychology",
    "Mental Performance Coach",
    "Athlete Performance",
    "Mind Balance Sports Psychology",
    "Siddhant Rana",
    "Confidence Coaching",
    "Performance Enhancement",
    "Sports Counseling",
  ],

  authors: [
    {
      name: "Siddhant Rana",
    },
  ],

  creator: "Siddhant Rana",
  publisher: "Mind Balance Sports Psychology",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    title: "Mind Balance Sports Psychology | Siddhant Rana",
    description:
      "Evidence-based sports psychology to help athletes maximize performance, build confidence, improve resilience, and achieve peak mental fitness.",
    url: "https://mindbalancesports.in",
    siteName: "Mind Balance Sports Psychology",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Mind Balance Sports Psychology",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mind Balance Sports Psychology | Siddhant Rana",
    description:
      "Helping athletes unlock peak mental performance through evidence-based sports psychology.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}