import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import "prismjs/themes/prism-tomorrow.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Filip Stosik Portfolio",
  description: "Portfolio app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        <div className={"max-w-[1600px] mx-auto"}>
        {children}
        </div>
        {/*<Footer />*/}
      </body>
    </html>
  );
}
