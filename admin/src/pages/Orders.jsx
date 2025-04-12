import React, { useEffect, useState } from 'react'
import axios from "axios"
import { backendUrl, currency } from './../App';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';
import { TbPackage } from "react-icons/tb";

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(backendUrl + "/api/order/list", {}, { headers: { token } })
      // console.log(response.data)

      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeOrder = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/remove', { id }, { headers: { token } })

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchAllOrders();
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const statusHandler = async (e, orderId) => {
    try {
      const response = await axios.post(backendUrl + '/api/order/status', {orderId, status:e.target.value}, {headers:{token}})
      console.log(response.data)
      
      if (response.data.success) {
        await fetchAllOrders()
      }

    } catch (error) {
      console.log(error)
      toast.error(response.data.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <>
      <p className='mb-2'>Number of Orders: ({orders.length})</p>
      <div className='flex flex-col gap-2'>

        {/* Orders Table Title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-200 dark:bg-gray-800 text-sm">
          <b>Order Info</b>
        </div>

        {/* Order Orders */}
        {/* {
          orders.map((item,index) => (
            <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border border-gray-300 dark:border-gray-700 text-sm'>
              <img src={item.image[0]} alt="" className='w-12' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=>removeOrder(item._id)} className='text-right md:text-center cursor-pointer text-lg'>X</p>
            </div>
          ))
        } */}

        <div>
          <div>
            {
              orders.map((order, index) => (
                <div key={index} className='grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 dark:border-gray-800 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300'>
                  {/* <img src={assets.parcel_icon} alt="" /> */}
                  <TbPackage className='text-7xl text-gray-600 dark:text-gray-400' />
                  <div>
                    <div>
                      {order.items.map((item, index) => {
                        if (index === order.items.length - 1) {
                          return <p key={index}> <strong>{item.name}</strong> x {item.quantity} <span> {item.size} </span></p>
                        } else {
                          return <p key={index}> <strong>{item.name}</strong> x {item.quantity} <span> {item.size} </span>,</p>
                        }
                      })}
                    </div>
                    <p className='mt-3 mb-2 font-medium'>{order.address.firstName} {order.address.lastName}</p>
                    <div>
                      <p>{order.address.street}</p>
                      <p>{order.address.city}, {order.address.state} {order.address.zipcode}</p>
                      <p>{order.address.country}</p>
                    </div>
                    <p>{order.address.phone}</p>
                  </div>
                  <div>
                    <p className='text-sm sm:text-[15px]'>Items : {order.items.length}</p>
                    <p className='mt-3'>Method : {order.paymentMethod}</p>
                    <p>Payment : {order.payment ? 'Done' : 'Pending' }</p>
                    <p>Date : {new Date(order.date).toDateString()}</p>
                  </div>
                  <p className='text-sm sm:text-[15px]'>{currency}{order.amount}</p>
                  <select onChange={(e)=>statusHandler(e,order._id)} value={order.status} className='p-2 font-semibold bg-gray-50 dark:bg-gray-950'>
                    <option value="Order Placed">Order Placed</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for Delivery">Out for Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>

              ))
            }
          </div>
        </div>




      </div>
    </>
  )
}

export default Orders