import React, { useEffect, useState } from 'react'
import "./nav.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMenu = () => {
    setIsOpen(prev=> !prev);
  }

  const handleSmallMenu = () => {
    setIsOpen(false);
  }

  useEffect(()=>{
    const header = document.querySelector("header");
    window.onscroll = () => {
      if(window.scrollY > 150) {
        header.classList.add("bg-color-primary-dark","border-b", "border-color-gray")
      } else {
        header.classList.remove("bg-color-primary-dark","border-b", "border-color-gray")
      }
    }
  },[window.scrollY])
  
  return (
    <header className='py-3 text-white fixed top-0 left-0 w-full z-[1000]'>

            <nav className='container flex justify-between items-center'>
              <a href="#" className='font-bold text-[1.75rem]'>Light<span className='text-orange-500'>Code.</span></a>
              <span onClick={handleMenu} id="menu" className='cursor-pointer duration-300 z-50 hover:text-color-secondary lg:hidden'><i className={isOpen ? "fa-solid fa-rectangle-xmark ": "fa-solid fa-bars"}></i></span>
              <ul className='hidden lg:flex  items-center gap-2 font-light'>
                <li><a className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#home">Home</a></li>
                <li><a className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#features">Features</a></li>
                <li><a className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#testimonials">Testimonial</a></li>
                <li><a className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#pricing">Pricing</a></li>
                <li><a className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#blog">Blog</a></li>
                <li><a className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#contact">Contact</a></li>
                <li><button className='font-bold py-3 px-6 bg-color-secondary rounded-[12px] transition-colors duration-300 hover:bg-orange-600'>Free Trial</button></li>
              </ul>

              <ul className='bg-color-primary-light z-10 lg:hidden duration-[1s] ease-in-out transition-all absolute right-0 top-0 h-screen w-screen  flex flex-col items-center gap-8 font-bold pt-[100px]'
              style={{transform: isOpen ? "translateX(0)" : "translateX(100%)"}}
              >
                <li><a onClick={handleSmallMenu} className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#home">Home</a></li>
                <li><a onClick={handleSmallMenu} className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#features">Features</a></li>
                <li><a onClick={handleSmallMenu} className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#testimonials">Testimonial</a></li>
                <li><a onClick={handleSmallMenu} className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#pricing">Pricing</a></li>
                <li><a onClick={handleSmallMenu} className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#blog">Blog</a></li>
                <li><a onClick={handleSmallMenu} className='py-1 px-2 cursor-pointer font-[200] transition-all duration-300 hover:text-color-secondary' href="#contact">Contact</a></li>
                <li><button className='py-3 px-6 bg-color-secondary rounded-[12px] transition-colors duration-300 hover:bg-orange-600'>Free Trial</button></li>
              </ul>
            </nav>
    </header>
  )
}

export default Navbar