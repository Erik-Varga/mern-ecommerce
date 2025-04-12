import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { BsStripe } from 'react-icons/bs'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext)
  
  const [method, setMethod] = useState('cod');
  
  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    email:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    country:'',
    phone:''
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData(data => ({...data,[name]:value}))
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      // console.log(orderItems)

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, {headers:{token}})
          // console.log(response.data)

          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          } else {
            toast.error(response.data.message)
          }
          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-1 items-center justify-center'>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 mih-h-[80vh] border-t">

        {/* left side */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-2xl mb-3">
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          <div className="flex gap-3">
            
            {/* first name */}
            <input onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" placeholder='First name' className='border border-gray-300 dark:border-gray-700 py-1.5 px-3.5 w-full' required />
            
            {/* last name */}
            <input onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" placeholder='Last name' className='border border-gray-300 dark:border-gray-700 py-1.5 px-3.5 w-full' required />
          </div>

          {/* email */}
          <input onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder='Email address' className='border border-gray-300 dark:border-gray-700 py-1.5 px-3.5 w-full' required />

          {/* street */}
          <input onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder='Street' className='border border-gray-300 dark:border-gray-700 py-1.5 px-3.5 w-full' required />

          <div className="flex gap-3">
            {/* city */}
            <input onChange={onChangeHandler} name='city' value={formData.city} type="text" placeholder='City' className='border border-gray-300 dark:border-gray-700 py-1.5 px-3.5 w-full' required />

            {/* state */}
            <input onChange={onChangeHandler} name='state' value={formData.state} type="text" placeholder='State' className='border border-gray-300 dark:border-gray-700 py-1.5 px-3.5 w-full' required />
          </div>

          <div className="flex gap-3">
            {/* zipcode */}
            <input onChange={onChangeHandler} name='zipcode' value={formData.zipcode} type="number" placeholder='Zipcode' className='border border-gray-300 dark:border-gray-700 py-1.5 px-3.5 w-full' required />

            {/* country */}
            <input onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder='Country' className='border border-gray-300 dark:border-gray-700 py-1.5 px-3.5 w-full' required />
          </div>

          {/* phone */}
          <input onChange={onChangeHandler} name='phone' value={formData.phone} type="number" placeholder='Phone' className='border border-gray-300 dark:border-gray-700 py-1.5 px-3.5 w-full' required />
        </div>

        {/* right side */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>

          <div className="mt-12">
            <Title text1={'PAYMENT'} text2={'METHOD'} />

            {/* payment method selection */}
            <div className="flex flex-wrap md:flex-row gap-3">
              <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-blue-600 dark:bg-blue-400' : ''}`}></p>
                <img src={assets.stripe_logo} alt="" className='h-5 mx-4' />
                <BsStripe />
              </div>
              <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-blue-600 dark:bg-blue-400' : ''}`}></p>
                <img src={assets.razorpay_logo} alt="" className='h-5 mx-4' />
              </div>
              
              <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-blue-600 dark:bg-blue-400' : ''}`}></p>
                <p className='text-gray-700 dark:text-gray-300 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
            </div>
            <div className="w-full text-end">
              <button type="submit" className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 text-sm my-8 px-8 py-3 cursor-pointer hover:shadow-xl">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder