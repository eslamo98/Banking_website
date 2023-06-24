import Card from "./Card";
import img1 from "./blog1.jpg"
import img2 from "./blog2.jpg"
import img3 from "./blog3.jpg"

const Blog = () => {
  return (
    <section id="blog" className='bg-color-primary-dark py-16 text-center text-white'>
        <div className="container">
          <span className='text-color-secondary text-[1rem] font-bold tracking-[2px]'>Innovation And Quality Improvement</span>
          <h2 className='text-center font-bold text-[2.1rem] mx-auto w-[70%] leading-[1.2] mt-4 mb-16'>Latest Updates, Solutions And Company News</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
              <Card 
              heading="Four ways to cheer yourself up on Blue Monday!" 
              text="On the second edition of Serious Business, Inc. editor Jim Ledbetter and Fusion senior editor Salmon debate..."
              img={img1}
               />

              <Card 
              heading="How to Organize Your budget for Maximum Productivity?" 
              text="Global provider connected products for consumers, and enterprises worldwide, supply chain control is everything..."
              img={img2}
               />

              <Card 
              heading="Should Small Businesses Be Entitled to system?" 
              text="Our team provides skilled & experienced managers who know the intricacies of this vertical and focus..."
              img={img3}
               />
          </div>
        </div>
    </section>
  )
}

export default Blog