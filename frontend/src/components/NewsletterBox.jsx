import React from 'react'

const NewsletterBox = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    }

  return (
    <div className='text-center max-w-4xl bg-gray-100 dark:bg-gray-900 hover:bg-white  dark:hover:bg-gray-800 m-2 p-5 rounded shadow-md'>
        <p className="text-2xl font-medium text-gray-800 dark:text-gray-200">Subscribe now & get 20% off</p>
        <p className="text-gray-400 dark:text-gray 600 mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem, aliquam error quas reprehenderit earum rerum ad incidunt, possimus, doloremque asperiores aspernatur est delectus illum enim recusandae animi non perferendis.
        </p>
        <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
            <button type="submit" className='bg-black text-white text-xs px-10 py-4 cursor-pointer'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox