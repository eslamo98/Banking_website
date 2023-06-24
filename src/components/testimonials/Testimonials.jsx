import React, { useEffect, useState } from 'react'
import data from "./reviews";
import "./moveUp.css"

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        setReviews(data);
    },[data])

    const handleReview = (id) => {
        setReviews(prev=>{
            return prev.map(item=>{
                return {...item, isActive: item.id === id ? true: false}
            })
        })

        const target = document.getElementById("id_"+id);
        const reviewsElements = [...document.querySelectorAll(".review")];
        let len = reviewsElements.length;
        
        console.log(reviewsElements);
        reviewsElements.map(item=>{
            item.classList.remove("move");
        })

        target.classList.add("move");
    }


  return (
    <section id="testimonials" className='container py-16 text-center text-white'>
        <span className='text-color-secondary text-[1rem] font-bold tracking-[2px]'>User Review</span>
        <h2 className='text-center font-bold text-[2.1rem] mx-auto w-[70%] leading-[1.2] mt-4 mb-16'>What Clients Say About Our App After Use It</h2>
        <div className='flex flex-wrap gap-8 justify-center items-center'>
            {reviews.map(item=>(
                <div className='flex flex-wrap gap-8' key={item.id}>
                    <img onClick={()=> handleReview(item.id)} style={{borderColor: item.isActive? "#ff7d3b":"white"}} src={item.image}  className='w-[80px] h-[80px] object-cover object-center rounded-[50%] border-2 border-white cursor-pointer' loading='lazy' alt="Person image" width="80" height="80"/>
                </div>
            ))}
        </div>
        <div>
            {reviews.map(item=> (
                <div key={item.id} id={"id_"+item.id}  className={'mt-20 m-auto md:w-4/5 review'}>
                    <div className='mb-10 md:text-2xl'>
                        {item.isActive && item.review}
                    </div>
                    <div className='mb-5 text-color-secondary font-semibold'>
                        {item.isActive && item.name}
                    </div>
                    <div className='font-semibold'>
                        {item.isActive && item.title}
                    </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Testimonials