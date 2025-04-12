import React from 'react'
import { assets, heroImages } from '../assets/assets'

const Hero = () => {
    const randomNumber = Math.floor(Math.random() * heroImages.length);

  return (
    <div className='flex flex-col sm:flex-row gap-2'>
        
        {/* hero left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className='text-gray-700 dark:text-gray-400'>
                <div className="flex items-center gap-2">
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                    <p className="font-medium text-sm md:text-base uppercase">Our Bestsellers</p>
                </div>
                <h1 className='prata text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>   
                <div className="flex items-center gap-2">
                    <p className="font-medium text-sm md:text-base uppercase">Shop Now</p>
                    <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                </div>
            </div> 
        </div>

        {/* hero right side */}
        {/* <img src={assets.hero_img} alt="" className='w-full sm:w-1/2 rounded' /> */}
        <img src={heroImages[randomNumber]} alt="" className='m-auto h-[500px] w-auto rounded shadow-md border border-gray-500' />
    </div>
  )
}

export default Hero