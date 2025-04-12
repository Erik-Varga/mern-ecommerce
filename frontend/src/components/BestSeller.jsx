import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller))
        setBestSeller(bestProduct.slice(0,5))
    },[products])

  return (
    <div className='my-10'>
        <div className="text-center text-3xl py-8">
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, magnam optio repellat at consequuntur facilis, sequi possimus sunt, provident qui dolores. Deserunt perferendis ut dolor laudantium amet eum est adipisci?
            </p>
        </div>

        {/* rendering products */}
      <div className="flex flex-wrap justify-center items-center gap-4 gap-y-6">
        {products.length > 0 ? <>
          {bestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </> : <>No Products</>}
      </div>
    </div>
  )
}

export default BestSeller