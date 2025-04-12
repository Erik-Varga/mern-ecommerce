import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import { FiCheckSquare } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className='w-1/5 border-r-2 border-gray-300 dark:border-gray-700'>
      <div className='flex flex-col gap-4 pt-6 pl-[20%] text-xs font-medium '>
        <NavLink to="/add" className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 border-r-0 px-3 py-2 rounded-l">
          <span><IoIosAddCircleOutline className='text-2xl ' /></span>
          <p className='hidden sm:block'>Add Item</p>
        </NavLink>
        <NavLink to="/list" className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 border-r-0 px-3 py-2 rounded-l">
          <span><FiCheckSquare className='text-2xl' /></span>
          <p className='hidden sm:block'>List Items</p>
        </NavLink>
        <NavLink to="/orders" className="flex items-center gap-3 border border-gray-300 dark:border-gray-700 border-r-0 px-3 py-2 rounded-l">
          <span><FiCheckSquare className='text-2xl' /></span>
          <p className='hidden sm:block'>Orders</p>
        </NavLink>
        <div className='mt-20'></div>
      </div>
    </div>
  )
}

export default Sidebar