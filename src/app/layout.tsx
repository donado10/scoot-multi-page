import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/Components/Header";
import FooterSection from "@/Components/FooterSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen w-screen overflow-x-hidden">
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
