import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillGoogleCircle, AiFillTwitterCircle } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a distinctio, expedita fugit ipsam ullam perspiciatis id ex impedit, cum sit omnis voluptas, sint voluptatum veniam minus! Facere, totam error.</p>
        <div className='flex max-w-[50%] my-6 justify-between'>
          <AiFillFacebook size={30} />
          <AiFillGithub size={30} />
          <AiFillGoogleCircle size={30} />
          <AiFillTwitterCircle size={30} />
        </div>
      </div>

      <div className='lg:col-span-2 flex justify-between'>
        <div>
          <h6 className='font-medium text-gray-400'>Solutions</h6>
          <ul>
            <li className='px-2 text-sm'>Analytics</li>
            <li className='px-2 text-sm'>Marketing</li>
            <li className='px-2 text-sm'>Commerce</li>
            <li className='px-2 text-sm'>Insights</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Supports</h6>
          <ul>
            <li className='px-2 text-sm'>Pricing</li>
            <li className='px-2 text-sm'>Documentation</li>
            <li className='px-2 text-sm'>Guides</li>
            <li className='px-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Company</h6>
          <ul>
            <li className='px-2 text-sm'>About</li>
            <li className='px-2 text-sm'>Blogs</li>
            <li className='px-2 text-sm'>Jobs</li>
            <li className='px-2 text-sm'>Press</li>
            <li className='px-2 text-sm'>Career</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Legal</h6>
          <ul>
            <li className='px-2 text-sm'>Claim</li>
            <li className='px-2 text-sm'>Policy</li>
            <li className='px-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>






    </footer>
  )
}

export default Footer