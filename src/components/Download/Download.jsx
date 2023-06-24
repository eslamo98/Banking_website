import googlePlayImg from "./g-play-dark.png"
import appStoreImg from "./ios-store-dark.png"
const Download = () => {
  return (
    <section className='bg-color-primary-light text-white text-center'>
        <div className="flex flex-col justify-center items-center container h-[80vh]">
            <h2 className="text-4xl font-bold">Download App Now And Save Your Money</h2>
            <p className="leading-relaxed pt-5">Serving an impressive list of long-term money with experience and expertise in multiple industries.</p>
            <div className="flex justify-center gap-5 pt-10">
                <a href="#" className="h-16 w-44 flex justify-center items-center transition-colors duration-300 hover:opacity-70 rounded-xl bg-white">
                    <img src={googlePlayImg} alt="google play image" />
                </a>
                <a href="#" className="h-16 w-44 flex justify-center items-center transition-colors duration-300 hover:opacity-70 rounded-xl bg-white">
                    <img src={appStoreImg} alt="app store image" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Download