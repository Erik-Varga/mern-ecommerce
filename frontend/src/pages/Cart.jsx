import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { BsTrash } from 'react-icons/bs';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
  
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData)
    }
  }, [cartItems, products])

  return (
    <div className='m-2 flex flex-1 items-center justify-center'>
      <div className="border-t pt-14">
        <div className="text-2xl mb-3">
          <Title text1={'YOUR'} text2={'CART'} />
        </div>

        <div className="">
          {cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b border-gray-300 dark:border-gray-700 text-gray-700 flex justify-between items-center gap-4'>
                <div className="flex items-center justify-between gap-2">
                  <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
                  <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 dark:bg-slate-900'>{item.size}</p>
                      <span className='text-sm'>qty</span>
                      <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                    <p>{currency}{productData.price * item.quantity}</p>
                    </div>
                  </div>
                </div>
                  <div>
                  <span><BsTrash onClick={()=>updateQuantity(item._id,item.size,0)} className='text-2xl cursor-pointer text-gray-500 hover:text-red-700 dark:hover:text-red-300' /></span>
                  </div>

                {/* <div className="flex items-center gap-6">
                  <img src={productData.image[0]} alt="" className='w-16 sm:w-20' />
                  <div className="flex flex-col">
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 dark:bg-slate-900'>{item.size}</p>
                      <span className='text-sm'>qty</span>
                      <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' />
                      <p>{currency}{productData.price * item.quantity}</p>
                    </div>

                  </div>
                </div> */}

                {/* <div className="">
                  <span><BsTrash onClick={()=>updateQuantity(item._id,item.size,0)} className='text-2xl cursor-pointer text-gray-500 hover:text-red-700 dark:hover:text-red-300' /></span>
                </div> */}

              </div>
            )
          })}
        </div>
        <div className="flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
            <div className="w-full text-end">
              <button onClick={()=>navigate('/place-order')} className="bg-gray-900 dark:bg-gray-100 text-gray-100 dark:text-gray-900 text-sm my-8 px-8 py-3 cursor-pointer hover:shadow-xl">PROCEED TO CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Cart