import React from 'react'

const Card = ({heading, text, isActive, icon}) => {
    const active = isActive ? "bg-color-primary-dark" : "";
  return (
    <div className={`border-2  text-white border-color-gray cursor-pointer duration-500 transition-colors ease-in-out hover:bg-color-primary-dark rounded-[15px] ${active} py-20 px-5 text-center flex flex-col gap-4 justify-center items-center`}>
        <span className='flex items-center justify-center py-5 px-6 rounded-[10px] bg-color-secondary'><i className={icon}></i></span>
        <h2 className='text-[1.2rem] font-bold'>{heading}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Card