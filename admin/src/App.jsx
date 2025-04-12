import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { useState } from 'react';
import Login from './pages/Login';

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = "$"

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    localStorage.setItem('token',token)    
  }, [token]);

  return (
    <div className='bg-gray-100 dark:bg-gray-900 min-h-screen'>
      <ToastContainer />
      { token === "" ? <Login setToken={setToken} /> : <>
        <Navbar setToken={setToken} />
        <hr className='text-gray-200 dark:text-gray-800' />
        <div className="flex w-full">
          <Sidebar />
          <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 dark:text-gray-400 text-base">
            <Routes>
              <Route path='/add' element={<Add token={token} />} />
              <Route path='/list' element={<List token={token} />} />
              <Route path='/orders' element={<Orders token={token} />} />
            </Routes>
          </div>
        </div>
      </>}
      <Footer />
    </div>
  )
}

export default App
