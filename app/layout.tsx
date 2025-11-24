// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NeoTek Designs",
  description: "Website with integrated AI front desk assistant.",
  openGraph: {
    title: "NeoTek Designs",
    description: "Website with integrated AI front desk assistant.",
    images: ["/og-image.png"], // <-- preview image
  },
  twitter: {
    card: "summary_large_image",
    images: ["logo1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#020617]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
