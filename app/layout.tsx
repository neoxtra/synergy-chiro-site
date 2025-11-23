// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Load Inter font from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose any weights you want
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NeoTek AI Assistant",
  description: "Website with integrated AI front desk assistant.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply Inter font to entire website */}
      <body className={`${inter.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
