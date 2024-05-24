import { NavBar } from "@/components/layout/NavBar";
import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const font = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Corportica Chat",
  description: "Corportica Chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} h-screen bg-[#2c2c29] `}>
        <NavBar />
        <div className="h-[calc(100vh-48px)]">{children}</div>
      </body>
    </html>
  );
}
