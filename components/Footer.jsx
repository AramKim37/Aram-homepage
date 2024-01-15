import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-1 w-full cursor-pointer md:bottom-5">
        <div className="text-center footerText text-[10px] md:text-base">
          copyright © {new Date().getFullYear()} - Developed by{" "}
          <span className="uppercase">Aram Kim</span>
        </div>
      </footer>
    </Link>
  );
};

export default Footer;
