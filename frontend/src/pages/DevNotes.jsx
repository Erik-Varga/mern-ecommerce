import React, { useEffect } from 'react'
import ProgressBar from '../components/ProgressBar'
import Title from '../components/Title'
import { assets, companyName } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox';
import { Link } from 'react-router-dom';
import { CiFolderOn, CiLogin } from "react-icons/ci";

const DevNotes = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  },[])
  
  return (
    <div className='flex flex-1 items-center justify-center'>
      <div className="flex flex-col gap-2 items-center justify-center p-2">

        <div className="text-2xl mb-3">
          <Title text1={'DEVELOPER'} text2={'NOTES'} />
        </div>

        <div className="border border-gray-300 dark:border-gray-700 w-90 rounded-sm p-5">
          <ProgressBar />
        </div>

        <div classname="text-sm">
          <br />

          <hr className='mt-2' />
          <b>Frontend</b>
          <p>React Vite</p>
          <p>Tailwind CSS - styling</p>
          <p>React Toastify - notifications</p>
          <hr className='mt-2' />
          <div className="">
            <span className='flex gap-1'><CiFolderOn className='text-2xl' />Folders</span>
          </div>
          <p><strong>components</strong> - stores all react components</p>
          <p><strong>context</strong> - stores ShopContext </p>
          <p><strong>hooks</strong> </p>
          <p><strong>pages</strong> - stores all pages</p>
          
          <br />
          <hr className='mt-2' />
          <b>Backend</b>
          <p><strong>cors</strong> - allows the frontend IP to access the backend</p>
          <p><strong>dotenv</strong> - allows the use of environment variables</p>
          <p><strong>express</strong> - creates the APIs</p>
          <p><strong>jsonwebtoken</strong> - enables user authentication and logging into website</p>
          <p><strong>mongoose</strong> - manages database connectivity</p>
          <p><strong>multer</strong> - allows to store the images on cloud storage</p>
          <p><strong>nodemon</strong> - restarts backend when changes occur</p>
          <p><strong>razorpay</strong> - online payment</p>
          <p><strong>stripe</strong> - online payment</p>
          <p><strong>validator</strong> - checks that the data from user is valid or not</p>
          <p><strong>cloudinary</strong> - cloud storage for images</p>
          <p><strong>bcrypt</strong> - encrypts password and stores it in database</p>
          <hr className='mt-2' />
          <div className="">
            <span className='flex gap-1'><CiFolderOn className='text-2xl' />Folders</span>
          </div>
          <p><strong>config</strong> - stores all of the configurations</p>
          <p><strong>middleware</strong> - stores all of the backend middleware</p>
          <p><strong>models</strong> - stores all of the models of mongos and defines the schemas</p>
          <p><strong>controllers</strong> - manages all of the logics of the backend</p>
          <p><strong>routes</strong> - manages express servers routes</p>
        </div>

        <div classname="text-sm">
          <br />
          <hr className='mt-2' />
          <b>Admin</b>

          <Link to="https://account.mongodb.com/account/login?nds=true" target="_blank">
            <p><strong>
                <span className='flex gap-1 hover:bg-amber-200 py-2 px-4'>
                  <CiLogin className='text-2xl' />
                  MongoDB Account Login
                </span>
              </strong></p>
          </Link>
          
          <Link to="https://cloudinary.com/users/login" target="_blank">
            <p><strong>
                <span className='flex gap-1 hover:bg-amber-200 py-2 px-4'>
                  <CiLogin className='text-2xl' />
                  Cloudinary Account Login
                </span>
              </strong></p>
          </Link>

        </div>
      </div>

    </div>
  )
}

export default DevNotes