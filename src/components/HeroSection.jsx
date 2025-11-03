import imgFeature from "../assets/fashion blogging-amico.png"
import { Link } from "react-router-dom";

function HeroSection() {
  return (
      <div className='mt-10'>
        <img src={imgFeature} alt='Feature dress'
         className=' rounded-lg h-[250px] md:h-[400px] block mx-auto object-contain shadow-lg'/>

      <h1 className='text-center text-2xl my-6 text-gray-900'>
        Rent a Dress With {" "}
         <span className='bg-pink-400 px-4 py-1 rounded-md inline-block md:mt-0 rotate-0 md:rotate-6'>Ease </span>and {" "}
         <span className='bg-pink-400 px-4 py-1 rounded-md inline-block  mt-4 md:mt-0 rotate-0 md:rotate-6'>Convenience !!!</span>
     </h1>

      <p className='text-center font-2xl text-gray-800 mb-6 '>
       Whether you're looking for bridal lehengas, tuxedos, evening gowns,
       or maternity wear, you’ll find a wide range of styles to suit every occasion.
       It’s a smart, sustainable way to enjoy luxury fashion without the commitment or cost of buying.
      </p>
      
      <Link to="/explore" className="text-3xl mt-15 text-white block mx-auto bg-pink-500 px-6 py-3 rounded-full hover:bg-pink-800  cursor-pointer font-lightbold transition duration-300 ease-in-out w-fit">
        Explore Now 👉 {" "}
        
      </Link>
        
     </div> 
    
  );
}

export default HeroSection;
