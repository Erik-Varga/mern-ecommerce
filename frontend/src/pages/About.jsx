import React from 'react'
import ProgressBar from '../components/ProgressBar'
import Title from '../components/Title'
import { assets, companyName } from '../assets/assets'
import NewsletterBox from './../components/NewsletterBox';

const About = () => {
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className="flex flex-col gap-2 items-center justify-center p-2">

        <div className="text-2xl mb-3">
          <Title text1={'ABOUT'} text2={'US'} />
        </div>

        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 dark:text-gray-400">
            <p className=""><strong>{companyName[0].name}</strong> was born out of passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
            <p className="">Since our inception, we've worked tirelessly to curate a selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
            <b className="text-gray-800 dark:text-gray-200">Our Mission</b>
            <p>Our mission at {companyName[0].name} is to empower customers with choice, convenience and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
        </div>

        <div className="text-xl mb-3">
          <Title text1={'WHY'} text2={'CHOOSE US'} />
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className='text-gray-600 dark:text-gray-400'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
          </div>
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className='text-gray-600 dark:text-gray-400'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
          </div>
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600 dark:text-gray-400'>Our team of dedicated professionals are here to assist you, ensuring your satisfaction as our top priority.</p>
          </div>
        </div>

        <div>
          <NewsletterBox />
        </div>

        <div className="border border-gray-300 dark:border-gray-700 w-90 rounded-sm p-5">
          <ProgressBar />
        </div>
      </div>

    </div>
  )
}

export default About