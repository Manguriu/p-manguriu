import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-300">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <p className="text-base text-gray-800">
            {" "}
            My website <br /> Rights @2023 &copy;{" "}
          </p>
        </div>
        <div>
          <SocialIcon
            url="https://www.linkedin.com/in/brian-manguriu-3b0b07207/"
            fgColor="green"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://twitter.com/Mainnet14"
            fgColor="blue"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://github.com/Manguriu"
            fgColor="black"
            bgColor="transparent"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
