import React from 'react'
import Button from '../Button/Button';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <section id="contact" className='bg-color-primary-dark py-16 text-center text-white'>
        <div className="container">
          <span className='text-color-secondary text-[1rem] font-bold tracking-[2px]'>Have A Questation</span>
          <h2 className='text-center font-bold text-[2.1rem] mx-auto w-[70%] leading-[1.2] mt-4 mb-16'>Get In Touch</h2>
          <form onSubmit={handleSubmit} className='w-full m-auto text-center md:w-2/3'>
            <div className="text-color-primary-dark grid gap-6 mb-6 md:grid-cols-2">
              <input type="text" placeholder='Name' className='w-full bg-gray-50 border border-gray-300 text-sm rounded-lg block p-3 focus:outline-none focus:border-color-secondary' />
              <input type="email" placeholder='Email' className='w-full bg-gray-50 border border-gray-300 text-sm rounded-lg block p-3 focus:outline-none focus:border-color-secondary' />
              <input type="text" placeholder='Phone' className='w-full bg-gray-50 border border-gray-300 text-sm rounded-lg block p-3 focus:outline-none focus:border-color-secondary' />
              <input type="text" placeholder='Company' className='w-full bg-gray-50 border border-gray-300 text-sm rounded-lg block p-3 focus:outline-none focus:border-color-secondary' />
            </div>
            <textarea rows="4" className="text-color-primary-dark bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-3 focus:outline-none focus:border-color-secondary" placeholder="Message"></textarea>
            <Button margin={2.5} text="Send Message" />
          </form>
        </div>
    </section>
  )
}

export default Form