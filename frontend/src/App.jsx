import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CompanyInfo from './components/CompanyInfo'
import SearchBar from './components/SearchBar'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import DevNotes from './pages/DevNotes'
import CountdownTimer from './components/CountdownTimer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col justify-between min-h-screen h-full sm:px-[2vw] md:px-[4vw] lg:px-[5vw] bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/devnotes' element={<DevNotes />} />
          <Route path='/countdown' element={<CountdownTimer />} />
        </Routes>
        <CompanyInfo />
      <Footer />
    </div>
  )
}

export default App
