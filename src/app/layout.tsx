import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I-Gate 2025",
  description: "Informatics Gathering 2025!",
  keywords: [
    "informatika",
    "undip",
    "hmif",
    "igate",
    "igate2025"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 dark:bg-neutral-900`}
      >
        <Providers>
          <Navbar />
          <main className="pt-20">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
