import React from 'react'
import Logo from './Logo';

const Navbar = ({setToken}) => {
  return (
    <div className='mx-2 py-2 px-1 flex items-center justify-between font-medium'>
        <Logo /> 
        <div className='bg-gray-600 dark:bg-gray-400 text-gray-100 dark:text-gray-900 px-4 py-1 text-sm'>ADMIN PANEL</div>
        <button onClick={()=>setToken('')} className='border px-5 py-2 rounded-sm hover:bg-gray-200 cursor-pointer text-sm uppercase'>Logout</button>
    </div>
  )
}

export default Navbar