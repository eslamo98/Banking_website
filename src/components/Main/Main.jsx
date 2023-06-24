import React from 'react'
import Button from '../Button/Button'

import img from "./hero4.png";

const Main = () => {
  return (
    <main id='home' className=' container text-white'>
        <div className="flex items-center md:flex-row sm:flex-col flex-col justify-center md:h-screen sm:h-auto h-auto sm:pt-[6rem] align-middle pt-[6rem]">
            <div className="felx flex-1 flex-col text-center md:text-left">
                <h1 className='text-[2.5rem] leading-[1.2] font-bold mb-6'>Awesome App for Your Financial.</h1>
                <p className='leading-8'>This should be used to tell a story and let your users know a little more about app and it’s use, How can benefit them.</p>
                <Button margin={2} text="Download App" href="#"/>
            </div>
            <div className='flex-1'>
                <img className='translate-y-[17px]' src={img} alt="hero slide" />
            </div>
        </div>
    </main>
  )
}

export default Main