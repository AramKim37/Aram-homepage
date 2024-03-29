import { Oswald } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Aram`s home",
  description: "This is New Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html className={oswald.className} lang="en">
      <body className="background w-full items-center flex flex-col justify-center">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
