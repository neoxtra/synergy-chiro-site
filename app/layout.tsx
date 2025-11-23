// app/layout.tsx
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

// Load Archivo font from Google Fonts
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose any weights you want
  variable: "--font-archivo",
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
      {/* Apply Archivo font to entire website */}
      <body className={`${archivo.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
