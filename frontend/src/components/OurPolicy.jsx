import React from 'react'
import { assets } from '../assets/assets'
import { MdCheck, MdCheckCircle, MdCurrencyExchange, MdOutlinePhone } from "react-icons/md";

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700 dark:text-gray-400'>
        <div>
            <MdCurrencyExchange size={40} className='w-12 m-auto mb-5' />            
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400 dark:text-gray-600'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <MdCheckCircle size={40} className='w-12 m-auto mb-5' />            
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400 dark:text-gray-600'>We provide 7 days free return policy</p>
        </div>
        <div>
            <MdOutlinePhone size={40} className='w-12 m-auto mb-5' />                      
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400 dark:text-gray-600'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy