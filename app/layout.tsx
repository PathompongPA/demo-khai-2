import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PunuttakitSupply.com",
  description: "ครบทุกหมวดอุปกรณ์อุตสาหกรรม",
};

type childrenType = Readonly<{ children: React.ReactNode; }>

export default function RootLayout({ children, }: childrenType) {
  return (
    <html
      lang="en"
      className={` ${inter.variable} h-full antialiased`}
    >
      <body className=" font-inter flex justify-center flex-col items-center overflow-x-hidden overflow-y-scroll">
        {children}
      </body>
    </html>
  );
}
