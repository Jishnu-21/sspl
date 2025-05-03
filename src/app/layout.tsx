import type { Metadata } from "next";
import "./globals.css";

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
      </body>
    </html>
  );
}
