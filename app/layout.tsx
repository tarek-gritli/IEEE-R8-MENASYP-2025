import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const manrope = localFont({
  src: "./fonts/Manrope.ttf",
  variable: "--font-manrope",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MenaSYP 2025",
  description: "IEEE R8 MENASYP Congress 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
