import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
      setLatestProducts(products.slice(0, 10));
    }, [products])
    
  return (
    <div className='my-10'>
      <div className="text-center py-8 text-3xl">
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nisi, est dolorum numquam neque corrupti error delectus cupiditate culpa fuga eligendi nam nulla ex! Sed, a. Quos eos ea dolores?
        </p>
      </div>

      {/* rendering products */}
      <div className="flex flex-wrap justify-center items-center gap-4 gap-y-6">
        {products.length > 0 ? <>
          {latestProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </> : <>No Products</>}
      </div>
      
    </div>
  )
}

export default LatestCollection