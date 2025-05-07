import type { Metadata } from "next";
import "./globals.css";
import GoToTop from "./components/GoToTop";

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
      <body className="font-comfortaa antialiased">
        {children}
        <GoToTop />
      </body>
    </html>
  );
}
