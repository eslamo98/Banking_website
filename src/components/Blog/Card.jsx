import React from 'react'

const Card = ({heading, img, text, isActive}) => {

  return (
    <div className={`text-white text-left  duration-500 transition-colors ease-in-out  rounded-[15px] flex flex-col justify-start items-start`}>
      <div className='lg:h-[40vh] overflow-hidden rounded-2xl'>
        <img className='h-full object-cover object-center duration-500 transition-transform hover:scale-[1.2]' src={img} alt="blog" />
      </div>
        <div className='flex items-center gap-5 py-5'>
          <p>20 August 2022</p>
          <p>1 min read</p>
        </div>
        <a href='#' className='text-2xl font-bold text-left underline hover:text-color-secondary hover:no-underline'>{heading}</a>
        <p className='leading-relaxed my-5 text-[17px]'>{text}</p>
        <a href="#" className=' font-bold text-left underline hover:text-color-secondary hover:no-underline'>Read More</a>
    </div>
  )
}

export default Card