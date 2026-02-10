import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

export const metadata: Metadata = {
  title: "Bistro Pulse",
  description: "Smart Kitchen Dashboard - Recipe Management & Inventory Tracker",
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
