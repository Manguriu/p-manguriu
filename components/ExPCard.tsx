"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { useState } from "react";

const ExPCard = () => {
  return (
    <>
      <div className="exp-card group border-t border-gray-400 ">
        <div className="exp-card__content">
          <h2 className="exp-card__content-title"> Laravel </h2>
        </div>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/Laravel.png"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="exp-card group border-t border-gray-400">
        <div className="exp-card__content">
          <h2 className="exp-card__content-title"> React.js </h2>
        </div>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/new.png"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>
        {/* <div className='relative flex w-full mt-2'>
            <div className='car-card__btn-container' >
                 <CustomButton  title='view more' handleClick={() => setIsOpen(true)} rightIcon="/right-arrow.svg" textStyles='text-white text-[14px] leading-[17px] font-bold' containerStyles='w-full py-[16px] rounded-full bg-primary-blue'/>
            </div>
        </div> */}
      </div>

      <div className="exp-card group border-t border-gray-400 ">
        <div className="exp-card__content">
          <h2 className="exp-card__content-title"> Next.js </h2>
        </div>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/next.png"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="exp-card group border-t border-gray-400 ">
        <div className="exp-card__content">
          <h2 className="exp-card__content-title"> PHP </h2>
        </div>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/php.png"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      <div className="exp-card group border-t border-gray-400 ">
        <div className="exp-card__content">
          <h2 className="exp-card__content-title"> Javscript </h2>
        </div>
        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/js.png"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default ExPCard;
