import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
// import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
import "prismjs/themes/prism-tomorrow.css";

export const metadata: Metadata = {
  title: "Algortihmen",
  description: "Algortihmen",
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
        <div className={"max-w-[1600px] mx-auto "}>
        {children}
        </div>
        {/*<Footer />*/}
      </body>
    </html>
  );
}
