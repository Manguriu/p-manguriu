import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

const About = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <div className=" about-morph padding-y mt-2 p-4 border-t border-gray-400">
        <h2 className="text-4xl font-extrabold  text-black-100">About me </h2>
        <p className="mt-1 ">
          As an experienced software developer, I have a strong background in
          coding, testing, and maintaining software systems. Throughout my
          career, I have developed a versatile skill set that allows me to excel
          in multiple programming languages. Specifically, I specialize in
          React, Next.js, Laravel, and JavaScript, which I have mastered to
          create efficient and scalable applications. With my expertise in React
          and Next.js, I can effortlessly build dynamic and interactive user
          interfaces. These frameworks provide a solid foundation for delivering
          exceptional user experiences while ensuring optimal performance.
          Additionally, my proficiency in Laravel, a powerful PHP framework,
          enables me to develop robust and secure back-end systems. &nbsp;
          <br />
          <Link
            href="https://github.com/Manguriu"
            className="underline text-base text-gray-800 mt-2">
            {" "}
            https://github.com/Manguriu
          </Link>
        </p>
      </div>
    </div>
  );
};

export default About;
