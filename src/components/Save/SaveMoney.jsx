import React from 'react'
import Button from '../Button/Button'

import img from "./hero3.png";

const SaveMoney = () => {
  return (
    <section className=' container text-white pb-16'>
        <div className="flex items-center md:flex-row sm:flex-col flex-col justify-center md:h-screen sm:h-auto h-auto sm:pt-[6rem] align-middle pt-[6rem]">
            <div className='flex-1'>
                <img className='translate-y-[17px]' src={img} alt="hero slide" />
            </div>
            <div className="felx flex-1 flex-col text-center md:text-left">
                <span className='text-color-secondary text-[14px] font-bold'>Saving Money</span>
                <h2 className='text-[2.25rem] leading-[1.2] font-bold my-6'>Best Financing App To Save Your Money</h2>
                <p className='leading-8'>Best financing app ever in the world. Easy to use and very user friendly for mobile banking. You can control your card easily and send money some one just one click.</p>
                <Button margin={2} text="Read More" href="#"/>
            </div>
        </div>
    </section>
  )
}

export default SaveMoney