import React from 'react'
import { ReactComponent as Facebook } from '../Assets/icons/facebook.svg';
import { ReactComponent as Twitter } from '../Assets/icons/twitter.svg';
import { ReactComponent as Instagram } from '../Assets/icons/instagram.svg';

const Footer = () => {
  return (
    <div className='h-[608px] lg:h-[22.62rem] bg-[#f8f8f8] flex lg:flex-row flex-col justify-evenly py-[5.25rem] gap-[2rem]'>
      {/* img */}
      <img className='lg:w-[10rem] w-[4.625rem] h-[3.625rem] lg:h-[7.8rem] mx-[9.625rem] lg:mx-0' src={require('../Assets/image.png')} alt="logo" />
      {/* contact */}
      <div className='w-[294px] lg:w-[14.5rem] flex flex-col gap-[1rem] px-[2rem]'>
        <p className='font-semibold text-[#0E2368] text-[15.77px] leading-[34.8px] lg:text-lg'>Contact Us</p>
        <div className='flex flex-col gap-[1rem] text-[#646874] text-[8.76px] leading-[12.27px] lg:text-[14.66px] lg:leading-[23px] font-[400]'>
          <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
          <p>example2020@gmail.com</p>
          <p>(904) 443-0343</p>
        </div>
      </div>
      {/* More*/}
      <div className='flex flex-col justify-between px-[2rem]'>
        <p className='font-semibold text-[#0E2368] text-[15.77px] leading-[34.8px] lg:text-lg'>More</p>
        <div className='flex flex-col gap-[1rem] text-[#646874] text-[8.76px] leading-[12.27px] lg:text-[14.66px] lg:leading-[23px] font-[400]'>
          <p>About Us</p>
          <p>Products</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
      </div>
      {/* social */}
      <div className='flex flex-col-reverse lg:flex-col items-center justify-between gap-[1rem]'>
        <div className='flex flex-col lg:items-end gap-[1rem]'>
          <p className='font-semibold text-[#0E2368] text-lg w-[8.06rem] hidden lg:block'>Social Links</p>
          <div className='gap-[2rem] hidden lg:flex'>
            <Instagram width="21" height="21" fill="#0E2368" />
            <Twitter width="21" height="21" fill="#0E2368" />
            <Facebook width="21" height="21" fill="#0E2368" />
          </div>
          <div className='gap-[2rem] lg:hidden flex'>
            <Instagram width="12" height="12" fill="#0E2368" />
            <Twitter width="12" height="12" fill="#0E2368" />
            <Facebook width="12" height="12" fill="#0E2368" />
          </div>
        </div>
        <p className='robo w-[12.31rem] text-center text-[#828B9C] text-[8.76px] leading-[12.27px] lg:text-[14.66px] lg:leading-[25.12px]'>© 2022 Food Truck Example</p>
      </div>
    </div>
  )
}

export default Footer