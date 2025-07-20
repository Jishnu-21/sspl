import type { Metadata } from "next";
import "./globals.css";
import GoToTop from "./components/GoToTop";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "SSPL - Security and Protection",
  description: "SSPL provides security and protection services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="font-comfortaa antialiased">
        {children}
        <GoToTop />
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}

export const viewport = 'width=device-width, initial-scale=1';
