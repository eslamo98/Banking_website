import React from 'react'
import Card from "./Card";
const Features = () => {
  return (
    <section className=' py-16 bg-color-primary-light text-center text-white'>
        <div className="container">
          <span className='text-color-secondary text-[1rem] font-bold tracking-[2px]'>How it works</span>
          <h2 className='text-center font-bold text-[2.1rem] mx-auto leading-[1.2] mt-4 mb-16'>Grow Up Your Money Saving</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
              <Card heading="Install The App" 
              text="We use an application designed a testing gnose to keep away"
              isActive={false}
              icon="fa-solid fa-calendar-days text-4xl" />

              <Card heading="Setup Your Profile" 
              text="We use an application designed a testing gnose to keep away"
              isActive={true}
              icon="fa-solid fa-chart-column text-4xl" />

              <Card heading="Enjoy The Features!" 
              text="We use an application designed a testing gnose to keep away"
              isActive={false}
              icon="fa-solid fa-phone text-4xl" />
          </div>
        </div>
    </section>
  )
}

export default Features