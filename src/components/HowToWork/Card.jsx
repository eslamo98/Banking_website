import React from 'react'

const Card = ({heading, text, isActive, icon}) => {
    const active = isActive ? "bg-color-secondary" : "bg-color-primary-dark";
  return (
    <div className={`text-white rounded-[15px]  py-3 px-5 text-center flex flex-col gap-4 justify-center items-center`}>
        <span className={`duration-500 cursor-pointer transition-colors ease-in-out flex items-center justify-center py-5 px-6 rounded-[10px]  hover:bg-color-secondary ${active}`}><i className={icon}></i></span>
        <h2 className='text-[1.2rem] font-bold'>{heading}</h2>
        <p>{text}</p>
    </div>
  )
}

export default Card