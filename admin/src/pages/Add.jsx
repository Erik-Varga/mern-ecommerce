import React, { useState } from 'react';
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("sizes",JSON.stringify(sizes))
      
      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)
      
      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

      // console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setPrice('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-2'>
      
      {/* upload images */}
      <div>
        <p className='mb-2'>Upload Images</p>
        <div className='flex items-center gap-2'>

          {/* image1 */}
          <div className="flex flex-col text-center items-center mb-2 px-5 py-3 border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover-gray-700">
            <label htmlFor="image1">
              {!image1 ? <FaCloudUploadAlt className='text-4xl text-gray-500' /> : <img src={URL.createObjectURL(image1)} alt="" className='w-20' />}
              <span className='text-xs'>Upload</span>
              <input onChange={(e) => setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>
          </div>
         
          {/* image2 */}
          <div className="flex flex-col text-center items-center mb-2 px-5 py-3 border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover-gray-700">
            <label htmlFor="image2">
              {!image2 ? <FaCloudUploadAlt className='text-4xl text-gray-500' /> : <img src={URL.createObjectURL(image2)} alt="" className='w-20' />}
              <span className='text-xs'>Upload</span>
              <input onChange={(e) => setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>
          </div>
         
          {/* image3 */}
          <div className="flex flex-col text-center items-center mb-2 px-5 py-3 border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover-gray-700">
            <label htmlFor="image3">
              {!image3 ? <FaCloudUploadAlt className='text-4xl text-gray-500' /> : <img src={URL.createObjectURL(image3)} alt="" className='w-20' />}
              <span className='text-xs'>Upload</span>
              <input onChange={(e) => setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>
          </div>
         
          {/* image4 */}
          <div className="flex flex-col text-center items-center mb-2 px-5 py-3 border-2 border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover-gray-700">
            <label htmlFor="image4">
              {!image4 ? <FaCloudUploadAlt className='text-4xl text-gray-500' /> : <img src={URL.createObjectURL(image4)} alt="" className='w-20' />}
              <span className='text-xs'>Upload</span>
              <input onChange={(e) => setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>
          </div>
        </div>
      </div>

      {/* name */}
      <div className='w-full'>
        <p className=''>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Type here' className='w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded-sm outline-none' required />
      </div>

      {/* description */}
      <div className='w-full'>
        <p className=''>Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text" placeholder='Write content here' className='w-full max-w-[500px] px-3 py-2 border border-gray-300 rounded-sm outline-none' required />
      </div>

      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        {/* category */}
        <div className='w-full'>
          <p className=''>Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2 border border-gray-300 rounded-sm outline-none'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        {/* subCategory */}
        <div className='w-full'>
          <p className=''>Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2 border border-gray-300 rounded-sm outline-none'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        {/* price */}
        <div className="w-full">
          <p className="">Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='0' className='w-[100px] px-3 py-2 border border-gray-300 rounded-sm outline-none' />
        </div>
      </div>

      {/* sizes */}
      <div>
        <p>Sizes</p>
        <div className='flex gap-3'>
          
          <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>
            <p className={`${sizes.includes("S") ? "bg-slate-500 text-gray-200 dark:text-gray-800" : "bg-slate-200 dark:bg-slate-800"} px-3 py-1 cursor-pointer`}>S</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
            <p className={`${sizes.includes("M") ? "bg-slate-500 text-gray-200 dark:text-gray-800" : "bg-slate-200 dark:bg-slate-800"} px-3 py-1 cursor-pointer`}>M</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>

            <p className={`${sizes.includes("L") ? "bg-slate-500 text-gray-200 dark:text-gray-800" : "bg-slate-200 dark:bg-slate-800"} px-3 py-1 cursor-pointer`}>L</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-slate-500 text-gray-200 dark:text-gray-800" : "bg-slate-200 dark:bg-slate-800"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>

          <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-slate-500 text-gray-200 dark:text-gray-800" : "bg-slate-200 dark:bg-slate-800"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>

      {/* best seller */}
      <div className='flex items-center gap-2 mt-3'>
        <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label htmlFor="bestseller" className='cursor-pointer'>Add to bestseller</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-gray-700 dark:bg-gray-300 text-gray-100 dark:text-gray-900 hover:bg-gray-900 dark:hover:bg-gray-100 cursor-pointer'>Add</button>
    </form>
  )
}

export default Add