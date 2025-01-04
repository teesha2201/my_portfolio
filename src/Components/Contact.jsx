import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
      <div  className="main-container py-16 ms-14 ">
      <h1 className="text-5xl font-semibold text-neutral-300 pb-16 font-bold text-center">
          Contact Me !
      </h1>
      <div className='mx-w-md w-1/3 mx-auto p-6 bg-slate-800 rounded-lg shadow-lg'>
        <form className=''>
          <div className='mb-4'>
            <label htmlFor="" className='block text-white text-sm font-semibold mb-2'>Your Name</label>
            <input type='text' placeholder='Ridhaansh Gupta' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 text-neutral-300' required/>
          </div>
          <div className='mb-4'>
            <label htmlFor="" className='block text-white text-sm font-semibold mb-2'>Your Email</label>
            <input type='email' placeholder='ridhaansh@gmail.com' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-100 text-neutral-300' required/>
          </div>
          <div className='mb-4'>
            <label htmlFor="" className='block text-white text-sm font-semibold mb-2'>Your Message</label>
            <textarea rows='4'  placeholder='type your message here...' className='w-full px-3 py-2 border rounded-lg bg-gray-800 focus:border-blue-500 text-neutral-300' required/>
          </div>
          <div className='flex justify-center'>
            <button type='submit' className='text-l  px-3  py-2 bg-neutral-300 text-teal-950  rounded-full shadow-lg rounded-lg hover:netural-300 focus:outline-white'>
              Send Message
            </button>
          </div>
        </form>
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default Contact