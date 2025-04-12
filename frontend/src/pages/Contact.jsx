import React from 'react'
import Title from '../components/Title'
import { assets, companyName } from '../assets/assets';
import NewsletterBox from './../components/NewsletterBox';

const Contact = () => {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className="flex flex-col gap-2 items-center justify-center p-2">
        <div className="text-2xl mb-3">
          <Title text1={'CONTACT'} text2={'ME'} />
        </div>

        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">

          {/* image */}
          <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]' />
          
          <div className="flex flex-col justify-center items-start gap-6">

            {/* store */}
            <p className="font-semibold text-xl text-gray-600 dark:text-gray-400">Our Store</p>
            <p className="text-gray-500">54709 Willms Station <br />Suite 350, Washington, 43322</p>
            <p className="text-gray-500">Tel: {companyName[0].tel} <br /> Email: {companyName[0].email}</p> 

            {/* career */}
            <p className="font-semibold text-xl text-gray-600 dark:text-gray-400">Careers at {companyName[0].name}</p>
            <p className="text-gray-500">Learn more about our teams and job openings.</p> 
            
            {/* button */}
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
          </div>
        </div>
        <NewsletterBox />
      </div>
    </div>
  )
}

export default Contact