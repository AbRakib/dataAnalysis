import React from 'react'
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
        <div className='flex flex-col justify-center'>
          <p className='uppercase text-[#00df9a] font-bold'>data analytics dashboard</p>
          <p className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias hic culpa nam adipisci, consectetur consequuntur. Culpa aliquid assumenda dolore, officiis sint ipsum odit maxime perferendis mollitia consequatur possimus iusto? Aspernatur.
          </p>
          <button className='btn rounded bg-gray-900 text-[#00df9a] w-3/12 py-3 mx-auto my-6 hover:text-black hover:bg-[#00df9a] ease-in-out duration-300'>Get Start</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics