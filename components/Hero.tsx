import React from 'react'
import Image from 'next/image'
import {CustomButton} from '@/components/ExportFile'

const Hero = () => {
    const hadleScroll= () => {}
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                My Name is Brian Manguriu
            </h1>
            <p className='hero__subtitle'> A passionate Web Developer</p>
            <CustomButton title="Explore Site" containerStyles="bg-primary-blue text-white rounded-full mt-10" handleClick={hadleScroll}/>       
        </div>
       
    </div>
  )
}

export default Hero