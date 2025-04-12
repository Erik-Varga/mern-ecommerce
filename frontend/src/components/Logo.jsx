import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SiShopee } from "react-icons/si";
import { companyName } from '../assets/assets';

const Logo = () => {
  return (
    <NavLink to="/">
      <div className='lexend text-2xl font-bold py-1 flex items-center'>
        {companyName[0].name}
        <SiShopee className='ml-0' />
      </div>
    </NavLink>
  )
}

export default Logo