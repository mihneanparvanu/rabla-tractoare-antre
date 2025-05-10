import type { Metadata } from "next";
import Timer from "./components/Timer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Antrenament Rabla Tractoare 2025",
  description: "Site de antrenament pentru depunerea dosarului la Rabla Tractoare 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased flex flex-col items-center`}>
        <Timer>
          {children}
        </Timer>
      </body>
    </html>
  );
}
