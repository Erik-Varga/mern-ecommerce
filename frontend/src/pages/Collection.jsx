import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { TbArrowRightToArc } from 'react-icons/tb';
import { BsArrowRight, BsGrid } from 'react-icons/bs';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('revelant');
  const [numberOfColumns, setNumberofColumns] = useState(2);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)
  };

  const sortProduct = () => {
    let filteredProductsCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(filteredProductsCopy.sort((a,b)=>(b.price - a.price)));
        break;
        
      case 'high-low':
        setFilterProducts(filteredProductsCopy.sort((a,b)=>(a.price - b.price)));
        break;

      default:
        applyFilter();
        break;


    }
  };

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])
  
  useEffect(() => {
    sortProduct()
  }, [sortType])



  return (
    <div className='flex flex-1 flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-300 m-2'>

      {/* left side */}

      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <TbArrowRightToArc className={`sm:hidden ${showFilter ? 'rotate-90' : ''}`} />
        </p>

        {/* category filter */}
        <div className={`border border-gray-300 dark:border-gray-700 pl-5 py-3 m-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex sm:flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300">
            <p className="flex gap-2">
              <input type="checkbox" value={'Men'} onChange={toggleCategory} className='w-3' /> Men
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={'Women'} onChange={toggleCategory} className='w-3' /> Women
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={'Kids'} onChange={toggleCategory} className='w-3' /> Kids
            </p>
          </div>
        </div>

        {/* subcategory filter */}
        <div className={`border border-gray-300 dark:border-gray-700 pl-5 py-3 m-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex sm:flex-col gap-2 text-sm font-light text-gray-700 dark:text-gray-300">
            <p className="flex gap-2">
              <input type="checkbox" value={'Topwear'} onChange={toggleSubCategory} className='w-3' /> Topwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} className='w-3' /> Bottomwear
            </p>
            <p className="flex gap-2">
              <input type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} className='w-3' /> Winterwear
            </p>
          </div>
        </div>

        <div>{filterProducts.length} {filterProducts === 1 ? "item" : "items"}</div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          {/* product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 dark:border-gray-700 text-sm px-4 mr-4">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: High to Low</option>
            <option value="high-low">Sort by: Low to High</option>
          </select>
        </div>

        {/* <div className='flex items-center gap-2 p-3 text-sm'>
          <div>Number of Columns: </div>
          <input onChange={(e)=>setNumberofColumns(e.target.value)} type="number" value={numberOfColumns} className='border border-gray-200 dark:border-gray-800 w-10 text-center py-1 bg-gray-100 dark:bg-gray-800' />
        </div> */}

        {/* rendering products */}
        <div className={`grid grid-cols-2 md:grid-col-3 lg:grid-col-4 gap-4`}>
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))}
        </div>

      </div>

    </div>
  )
}

export default Collection