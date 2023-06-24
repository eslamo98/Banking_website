
const Card = ({monthlyHeading,anualyHeading, isMonthly, title}) => {
  
  
  return (
    <div 
    className='parent relative transition-all duration-300 ease-in-out flex justify-center' 

    style={{ transform: isMonthly ? "rotateY(0)" : "rotateY(180deg)",transformStyle: "preserve-3d"}}>
      
      <div style={{backfaceVisibility: "hidden" }} className={`child border-2 bg-color-primary-light  text-white border-color-gray duration-500 transition-colors ease-in-out rounded-[15px] absolute py-11 px-7 flex flex-col items-start`}>
        <h2 className='relative text-6xl font-bold before:absolute before:left-[-8px] before:top-[3px] before:text-[14px] before:content-["$"] 
        after:absolute after:right-[-80px] after:font-normal after:bottom-[3px] after:text-[14px] after:content-["/_per_month"]'>{monthlyHeading}</h2>
        <div className="py-10 text-left">
          <div className='mb-3 font-bold text-xl'>{title}</div>
          <p className="leading-relaxed">
          For Beginner Who Want To Scale Business Globaly
          </p>
        </div>
        <ul className="space-y-4 pb-10 text-left">
          <li>
              <i className="fa-solid fa-bookmark text-color-secondary"></i>
              <span className="pl-4">Expense Management</span>
          </li>
          <li>
              <i className="fa-solid fa-bookmark text-color-secondary"></i>
              <span className="pl-4">Card Management</span>
          </li>
          <li>
              <i className="fa-solid fa-bookmark text-color-gray"></i>
              <span className="pl-4">Instant Statistics</span>
          </li>
          <li>
              <i className="fa-solid fa-bookmark text-color-gray"></i>
              <span className="pl-4">Bookmark Function</span>
          </li>
          <li>
              <i className="fa-solid fa-bookmark text-color-gray"></i>
              <span className="pl-4">Accounting System</span>
          </li>
        </ul>
        <button className="w-full relative  py-3 px-9 rounded-xl font-bold duration-400  transition-colors  ease-in-out cursor-pointer bg-color-primary-dark hover:bg-color-secondary">
          <a href="#">Get Started</a>
        </button>
      </div>
      {/* style={{transform: "rotateY(180deg) translateY(-100%)"}} className={`z-[-1] */}
      <div style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden"}} className={`border-2 justify-center bg-color-primary-light  text-white border-color-gray duration-500 transition-colors ease-in-out rounded-[15px] absolute py-11 px-7 flex flex-col items-start`}>
        <h2 className='relative text-6xl font-bold before:absolute before:left-[-8px] before:top-[3px] before:text-[14px] before:content-["$"] 
        after:absolute after:right-[-80px] after:font-normal after:bottom-[3px] after:text-[14px] after:content-["/_per_month"]'>{anualyHeading}</h2>
        <div className="py-10 text-left">
          <div className='mb-3 font-bold text-xl'>{title}</div>
          <p className="leading-relaxed">
          For Beginner Who Want To Scale Business Globaly
          </p>
        </div>
        <ul className="space-y-4 pb-10 text-left">
          <li>
              <i className="fa-solid fa-bookmark text-color-secondary"></i>
              <span className="pl-4">Expense Management</span>
          </li>
          <li>
              <i className="fa-solid fa-bookmark text-color-secondary"></i>
              <span className="pl-4">Card Management</span>
          </li>
          <li>
              <i className="fa-solid fa-bookmark text-color-gray"></i>
              <span className="pl-4">Instant Statistics</span>
          </li>
          <li>
              <i className="fa-solid fa-bookmark text-color-gray"></i>
              <span className="pl-4">Bookmark Function</span>
          </li>
          <li>
              <i className="fa-solid fa-bookmark text-color-gray"></i>
              <span className="pl-4">Accounting System</span>
          </li>
        </ul>
        <button className="w-full relative z-15 py-3 px-9 rounded-xl font-bold duration-400  transition-colors  ease-in-out cursor-pointer bg-color-primary-dark hover:bg-color-secondary">
          <a href="#">Get Started</a>
        </button>
      </div>
    </div>
  )
}

export default Card