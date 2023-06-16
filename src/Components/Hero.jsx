import React from 'react'

const Hero = () => {
  return (
    // <div className='max-w-[1640px] mx-2'>
        <div className=' relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <p className='px-4 text-xl font-semibold'>THE ART OF</p>
                <h1 className='px-4 text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-serif'>SLOW</h1>
                <h1 className='px-4 text-6xl sm:text-7xl md:text-7xl lg:text-8xl font-serif'>GROWTH.</h1>
                <p className='px-4 text-xl font-semibold'>(To be calm is the highest achievement of the self)</p>
                <div classname='flex'>
                    <button className='rounded-full px-6 py-2 m-4 items-center text-bold text-black bg-white  hover:bg-black/30 hover:text-white'>
                        Get started
                    </button>
                </div>
            </div>
            <img className='w-full max-h-[500px] object-cover' src="https://wallpaperaccess.com/full/3350930.jpg" alt="/" />
        </div>
    // </div>
  )
}

export default Hero
