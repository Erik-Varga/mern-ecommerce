import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import { LuMoon, LuSun } from 'react-icons/lu';

const ToggleDarkMode = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className="text-2xl transition-all duration-700 ease-in-out flex items-center rounded-full"
    >
      <button>{isDarkMode ? <LuSun className='text-gray-800 dark:text-gray-200 cursor-pointer' /> : <LuMoon className='text-gray-800 dark:text-gray-200 cursor-pointer' />}</button>
    </div>
  )
}

export default ToggleDarkMode