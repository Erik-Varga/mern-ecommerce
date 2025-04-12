import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
import { FaAngleDoubleUp } from "react-icons/fa";
import { companyName } from '../assets/assets';

const CompanyInfo = () => {

    const handleTopOfPage = () => {
        window.scrollTo(0, 0)
    }

    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 md:gap-14 mx-2 my-10 mt-40 text-sm'>
                <div className="">
                    <Logo />
                    <p className="w-full md:w-2/3 text-gray-600 dark:text-gray-400">
                        Magni asperiores eveniet perferendis, unde corrupti ea suscipit quaerat quasi quae reprehenderit?
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-2'>COMPANY</p>
                    <ul className="flex flex-row sm:flex-col justify-around gap-4 sm:gap-1 text-gray-600 dark:text-gray-400">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/about'><li>About Us</li></Link>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-2'>GET IN TOUCH</p>
                    <ul className="flex flex-row sm:flex-col justify-around gap-4 sm:gap-1 text-gray-600 dark:text-gray-400">
                        <li>{companyName[0].tel}</li>
                        <li>{companyName[0].email}</li>
                    </ul>
                </div>
            </div>

            <div className='p-2'>
                <span className='flex justify-end' onClick={handleTopOfPage}>
                    <FaAngleDoubleUp className='text-2xl p-1 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer' />
                </span>
            </div>

            <div className='text-gray-300 dark:text-gray-700'>
                <hr />
            </div>
        </div>
    )
}

export default CompanyInfo