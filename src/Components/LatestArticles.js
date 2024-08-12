import React, { useState } from 'react'
import Tomato from '../Assets/grilledTomato.png'
import Snacks from '../Assets/snacks.png'
import PostWorkout from '../Assets/postWorkout.png'
import Corn from '../Assets/howToGrill.png'
import Crunch from '../Assets/crunchWrap.png'
import Broccoli from '../Assets/brocolli.png'
import { ReactComponent as LeftArrow } from '../Assets/icons/leftArrow.svg';
import { ReactComponent as LeftPush } from '../Assets/icons/selectedRight.svg';
import { ReactComponent as RightArrow } from '../Assets/icons/rightArrow.svg';
import { ReactComponent as RightPush } from '../Assets/icons/selectedLeft.svg';


const LatestArticles = () => {
  const firstSlide = [
    {img:Tomato,title:'Grilled Tomatoes at Home',desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {img:Snacks,title:'Snacks for Travel',desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {img:PostWorkout,title:'Post-workout Recipes',desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
  ]
  const secondSlide = [
    {img:Corn,title:'How To Grill Corn',desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {img:Crunch,title:'Crunchwrap Supreme',desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
    {img:Broccoli,title:'Broccoli Cheese Soup',desc:"PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."},
  ]

  const [first,setFirst] = useState(true);
  
  return (
    <div className='pt-[7rem] pb-[3rem] flex lg:items-center lg:justify-center'>
      <div className=''>
        <p className='text-[#0E2368] font-semibold font-sans w-[375px] lg:w-[28.8rem] lg:text-[3.5rem] text-[28px] leading-[54px] text-center lg:text-start lg:leading-[2.625rem]'>Latest Articles</p>
        
        {first ? (
          <div className='mt-[5rem] flex lg:flex-row flex-col gap-[1rem] lg:w-[76.5625rem] justify-between items-center'>
              {/* card */}
              {firstSlide.map((card,index)=>(
                <div key={index} className='card'>
                    <img className='lg:w-[20.3rem] w-[204px] h-[166px] lg:h-[16.06rem] rounded-[27px] lg:rounded-[1.31rem]' src={card.img} alt="tomato" />
                    <div className='flex flex-col gap-[1rem] items-center lg:items-start lg:text-start text-center'>
                      <p className='card_title PS'>{card.title}</p>
                      <p className='card_desc'>{card.desc}</p>
                      <button className='card_button'>Read More</button>
                    </div>
                </div>
              ))}
          </div>
        ):(
          <div className='mt-[5rem] flex lg:flex-row flex-col gap-[1rem] lg:w-[76.5625rem] justify-between items-center'>
              {/* card */}
              {secondSlide.map((card,index)=>(
                <div key={index} className='card'>
                    <img className='lg:w-[20.3rem] w-[204px] h-[166px] lg:h-[16.06rem] rounded-[27px] lg:rounded-[1.31rem]' src={card.img} alt="tomato" />
                    <div className='flex flex-col gap-[1rem] items-center lg:items-start lg:text-start text-center'>
                      <p className='card_title PS'>{card.title}</p>
                      <p className='card_desc'>{card.desc}</p>
                      <button className='card_button'>Read More</button>
                    </div>
                </div>
              ))}
          </div>
        )}
        
        {/* buttons */}
        <div className='lg:flex items-center justify-center mt-[4rem] gap-[1rem] hidden'>
          <button onClick={()=>{setFirst(true)}} className='page_button'>{first?<RightPush width="10" height="16"/>:<LeftArrow width="10" height="16"/>}</button>
          <p className='w-[28px] font-[400] text-[22px] leading-[27.22px] text-[#424961] font-sans'><span>{first? '1':'2'}</span>/2</p>
          <button onClick={()=>{setFirst(false)}} className='page_button'>{first?<LeftPush width="10" height="16"/>:<RightArrow width="10" height="16"/>}</button>
        </div>
        {/* reponsive */}
        <div className='flex items-center justify-center mt-[4rem] gap-[1rem] lg:hidden'>
          <button onClick={()=>{setFirst(true)}} className='page_button'>{first?<RightPush width="5" height="7.85"/>:<LeftArrow width="5" height="7.85"/>}</button>
          <p className='w-[17px] lg:w-[28px] font-[400] lg:text-[22px] text-[12px] leading-[27.22px] text-[#424961] font-sans'><span>{first? '1':'2'}</span>/2</p>
          <button onClick={()=>{setFirst(false)}} className='page_button'>{first?<LeftPush width="5" height="7.85"/>:<RightArrow width="5" height="7.85"/>}</button>
        </div>
      </div>
    </div>
  )
}

export default LatestArticles