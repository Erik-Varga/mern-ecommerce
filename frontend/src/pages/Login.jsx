import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', {name,email,password})
        // console.log(response.data)

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        } else {
          toast.error(response.data.message)
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', {email,password})
        // console.log(response.data)

        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        } else {
          toast.error(response.data.message)
        }
      }
      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])


  return (
    <div className='flex flex-1 items-center justify-center bg-gray-100 dark:bg-gray-900'>

      {/* form */}
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 dark:text-gray-200'>

        {/* title */}
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800 dark:bg-gray-200" />
        </div>
        
        {/* name */}
        {currentState === 'Login' ? '' : <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' className='w-full px-3 py-2 border border-gray-800 dark:border-gray-200 rounded-sm' required /> }

        {/* email */}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='w-full px-3 py-2 border border-gray-800 dark:border-gray-200 rounded-sm' required />

        {/* password */}
        <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='w-full px-3 py-2 border border-gray-800 dark:border-gray-200 rounded-sm' required />

        {/* forgot password */}
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {
            currentState === "Login" 
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> 
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>Login Here</p> 
          }
        </div>

        {/* button */}
        <button type='submit' onClick={()=>navigate('/place-order')} className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 text-sm my-8 px-8 py-3 cursor-pointer hover:bg-blue-800">
          {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}

export default Login