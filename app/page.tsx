"use client";

import Image from "next/image";
import Hero from "@/components/Hero";
import ExPCard from "@/components/ExPCard";
import About from "@/components/About";
import { useRef } from "react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="about">
        <div className="home__text-container flex items-center justify-center text-center">
          <h1 className="text-4xl  font-extrabold">Profile Details </h1>
        </div>

        <section className="snap-center">
          <div className="mt-12">
            <About />
          </div>
        </section>

        <section className="">
          <h2 className="mt-12 text-4xl font-extrabold  text-black-100">
            My Skills{" "}
          </h2>
          <div className=" mb-2 home__exp-wrapper border-t border-gray-200">
            <ExPCard />
          </div>
        </section>
      </div>
    </main>
  );
}
