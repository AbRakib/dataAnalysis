import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-[#00df9a] font-bold p-2'>growing with data analytics</p>
        <h1 className='capitalize md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>grow with data</h1>
        <div>
          <TypeAnimation
          className='font-bold md:pl-4 pl-2'
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Fast. flexible financing for USD',
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              'Fast. flexible financing for BTB',
              2000,
              'Fast. flexible financing for BTC',
              2000,
              'Fast. flexible financing for SASS',
              2000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue fot USD, BTB, BTC & SASS</p>
        <button className='btn rounded bg-[#00df9a] w-2/12 py-3 mx-auto my-6'>Get Start</button>
      </div>
    </div>
  )
}

export default Hero