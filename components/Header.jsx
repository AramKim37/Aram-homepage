import React from "react";
import { SocialIcon } from "react-social-icons";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-around mx-auto max-w-7xl">
      <div className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/aram-kim/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/aram-kim/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/aram-kim/"
          fgColor="gray"
          bgColor="transparent"
        />
      </div>
      <div classname="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
      </div>
    </header>
  );
};

export default Header;
