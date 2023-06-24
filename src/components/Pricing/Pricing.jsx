import React, { useEffect, useState } from 'react'
import Card from "./Card";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const [child, setIsChild] = useState(0);
  
  const handlePricingPlan =()=> {
    setIsMonthly(prev => !prev);
  }

  useEffect(()=>{
    const parents = [...document.querySelectorAll(".parent")];
    setIsChild(document.querySelector(".child").offsetHeight);
    parents.forEach(parent=>{
      parent.style.height = child + "px";
    })
  },[child])

  return (
    <section id="pricing" className='bg-color-primary-light py-16 text-center text-white'>
        <div className="container">
          <span className='text-color-secondary text-[1rem] font-bold tracking-[2px]'>Pricing</span>
          <h2 className='text-center font-bold text-[2.1rem] mx-auto w-[70%] leading-[1.2] mt-4 mb-6'>Get In Reasonable Price</h2>
          <div className='flex justify-center items-center gap-6 mb-24'>
            <span className='text-[18px]'>Bill Monthly</span>
            <div onClick={handlePricingPlan}
             style={{backgroundColor: isMonthly ? "#020726": "#ff7d3b"}}
             className='relative w-[80px] duration-300 ease-in-out transition-all h-[32px]  border border-solid border-color-gray cursor-pointer rounded-full'>
              <span 
              style={{left: isMonthly ? "5px": "calc(100% - 29px)"}}
              className='absolute duration-300 ease-in-out transition-all left-[5px] w-[24px] h-[24px] rounded-full bg-white top-[50%] translate-y-[-50%] block'></span>
            </div>
            <span className='text-[18px]'>Bill Anually</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8" style={{perspective: "1200px"}}>
              <Card 
              monthlyHeading="20" 
              anualyHeading="120" 
              isMonthly={isMonthly}
              title="Basic" />

              <Card 
              monthlyHeading="50"
              anualyHeading="150"
              isMonthly={isMonthly}
              title="Standard" />

              <Card 
              monthlyHeading="100" 
              anualyHeading="500"
              isMonthly={isMonthly}
              title="Basic" />
          </div>
        </div>
    </section>
  )
}

export default Pricing