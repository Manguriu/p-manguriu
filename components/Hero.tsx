import React from 'react'
import Image from 'next/image'
import {CustomButton} from '@/components/ExportFile'
import { SocialIcon } from 'react-social-icons';

const Hero = () => {
    const hadleScroll= () => {}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                My Name is Brian Manguriu
            </h1>
            <p className='hero__subtitle'> A passionate Web Developer</p>
            <CustomButton title="More Info.." containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={hadleScroll}/>   
            <div>
            <SocialIcon url="https://www.linkedin.com/in/brian-manguriu-3b0b07207/"  fgColor='green' bgColor='transparent'/>
            <SocialIcon url="https://twitter.com/Mainnet14" fgColor='blue' bgColor='transparent'/>
            <SocialIcon url="https://github.com/Manguriu" fgColor='black' bgColor='transparent' />
        </div>    
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/alpha2.png" alt=""  fill className='object-contain'/>
</div>
          <div className='hero__image-overlay'/>
        </div>
    </div>
  )
}

export default Hero