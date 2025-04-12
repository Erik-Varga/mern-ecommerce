import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App';
import Logo from '../components/Logo';
import { toast } from 'react-toastify';

const Login = ({setToken}) => {
  const [currentState, setCurrentState] = useState('Admin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      // console.log(email,password)

      const response = await axios.post(backendUrl + '/api/user/admin', {email,password})
      // console.log(response)
      if (response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <Logo />

      {/* form */}
      <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 shadow-md p-5'>

        {/* title */}
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800 dark:bg-gray-200" />
        </div>
        
        {/* email */}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800 dark:border-gray-200 rounded-sm' required />

        {/* password */}
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" placeholder='Password' className='w-full px-3 py-2 border border-gray-800 dark:border-gray-200 rounded-sm' required />

        {/* forgot password */}
        {/* <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {
            currentState === "Login" 
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> 
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p> 
          }
        </div> */}

        {/* button */}
        <button type='submit' className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 text-sm my-8 px-8 py-3 cursor-pointer hover:bg-blue-800 w-[90%] rounded-sm">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login