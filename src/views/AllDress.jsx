import Navbar from "../components/navbar";
import ImgExplore from "../assets/360.jpg";
import { DRESSES_CONFIG } from "../config/DressConfig";
import DressCard from "../components/DressCard";

function AllDress() {
  return (
    <div>
        <Navbar/>
        <img src={ImgExplore} alt="Explore" 
        className="w-full h-[600px] object-cover mb-[40px]"/>
        <p className="ml-[100px] text-center">
           <h2 className="text-3xl text-center mb-[20px]"> Explore our extensive collection of dresses for every occasion.</h2>
           From elegant evening gowns to casual day dresses, find the perfect fit for your style and event. Browse now and discover your next favorite dress!
        </p>
        <h2 className='text-center text-gray-600 text-4xl my-6 py-[50px] pt-[100px]'>
          Our Products... 
         </h2>

       <div className="flex  flex-wrap justify-center mt-8">
        {DRESSES_CONFIG.map((dressData)=>{

          const { id,
            name,
            image, 
            description,
            pricePerDay,
            sizesAvailable,
            colorsAvailable,
            category, 
            availability, 
            rating} = dressData;

            return(
            <DressCard 
            key={id}
            id={id}
            name={name}
            image={image}
            description={description}
            pricePerDay={pricePerDay} 
            sizesAvailable={sizesAvailable} 
            colorsAvailable={colorsAvailable} 
            category={category}
             availability={availability}  
            rating={rating}
            />
            );
        })}
      </div>
    </div>
  )
}

export default AllDress;
