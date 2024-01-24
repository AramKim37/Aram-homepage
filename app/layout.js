import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aram`s home",
  description: "This is New Homepage",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "app/icon.ico",
        href: "app/icon.ico",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="background min-h-screen">
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
