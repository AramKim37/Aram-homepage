import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aram`s home",
  description: "This is New Homepage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="background">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
