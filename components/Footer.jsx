import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="text-center nameText text-[10px] md:text-base">
          copyright © {new Date().getFullYear()} - Developed by{" "}
          <span className="uppercase">Aram Kim</span>
        </div>
      </footer>
    </Link>
  );
};

export default Footer;
