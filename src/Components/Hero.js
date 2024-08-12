import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#ffffff] w-full flex lg:flex-row flex-col-reverse justify-between'>
        {/* left */}
        <div className='relative mt-[2.1rem] lg:ml-[6.25rem] mx-[4rem]'>
            <img className='w-[6.7rem] h-[5.2rem] hidden lg:block' src={require('../Assets/image.png')} alt="logo" />
            <div className='w-[255px] lg:w-[21.5rem] mt-[6rem] flex flex-col gap-[2rem] items-center lg:items-start'>
                <p className=' text-[38px] leading-[46px] text-center lg:text-start lg:text-6xl font-sans font-bold lg:leading-[69px] cursor-default text-[#0E2368]'>Discover the <span className='text-[#E23744]'>Best</span> Food and Drinks</p>
                <p className='OS lg:text-[1.1rem] text-[11px] leading-[18px] lg:leading-[1.7rem] text-center lg:text-start'>Naturally made Healthcare Products for the better care & support of your body.</p>
                <button className='explore'>Explore Now!</button>
            </div>
        </div>
        {/* right */}
        <div className='relative '>
            {/* pizza */}
            <img className='lg:w-[45.95rem] w-[378.21px] h-[413.72px] lg:h-[50rem]' src={require('../Assets/pizza.png')} alt="pizza" />
            {/* svg */}
            <img className='absolute -top-[0.5px] lg:w-[47rem] h-[426px] lg:h-[52.4rem]' src={require('../Assets/design.png')} alt="design" />
            {/* button */}
            <button className='getInTouch'>Get in Touch</button>
        </div>
    </div>
  )
}

export default Hero