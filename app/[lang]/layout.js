import MarqueeBanner from "@/components/MarqueeBanner";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Head from "next/head";
import "@/app/globals.css";
import { Instrument_Serif } from "next/font/google";
import { getDictionary } from "./dictionaries";

export const metadata = {
  title: "News Portal",
  description: "A News Portal Build with Next.js",
};

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({ children, params }) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`bg-gray-50 text-black`}
      >
        <Navbar dictionary={dictionary} lang={lang}/>
        <MarqueeBanner dictionary={dictionary}/>
        {children}
      </body>
    </html>
  );
}
