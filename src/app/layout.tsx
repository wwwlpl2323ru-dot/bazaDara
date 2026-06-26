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
  title: "База отдыха Дара — Озеро Шалкар, Северный Казахстан",
  description:
    "Уединённый оазис для отдыха у озера Шалкар. Домики на 2-6 мест, баня из липы, рыбалка, катамараны. Северо-Казахстанская область, г. Кокшетау.",
  keywords: "база отдыха, Шалкар, Кокшетау, отдых Казахстан, домики у озера",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[oklch(0.07_0.01_150)]">{children}</body>
    </html>
  );
}
