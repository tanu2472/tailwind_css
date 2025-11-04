const CATEGORY_STYLES = {
  "Casual":{ 
    bgColor: "bg-green-100", 
    textColor: "text-green-800"
  },
  "Evening Wear":{
    bgColor: "bg-blue-100", 
    textColor: "text-blue-800"
  },
  "Party Wear":{
    bgColor: "bg-pink-100", 
    textColor: "text-pink-800"
  },
  "Bridal":{
    bgColor: "bg-green-100", 
    textColor: "text-green-800"
  },
  "traditional":{
    bgColor: "bg-yellow-100", 
    textColor: "text-yellow-800"},
  "Vintage":{
    bgColor: "bg-purple-100", 
    textColor: "text-purple-800"},
  "Prom":{
    bgColor: "bg-red-100", 
    textColor: "text-red-800"
  },
  "Workwear":{
    bgColor: "bg-gray-100", 
    textColor: "text-gray-800"
  },
  "Ethnic":{
    bgColor: "bg-teal-100", 
    textColor: "text-teal-800"
  },
  "Resort Wear":{
    bgColor: "bg-orange-100", 
    textColor: "text-orange-800"
  },

};
 
const RatingStars =({rating}) =>{
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - filledStars - halfStar;
  return (
    <div className="flex items-center">
      {Array(filledStars).fill(0).map((_, index) => (
          <svg key={`filled ${index}`} xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5 text-yellow-400" 
           viewBox="0 0 20 20" 
           fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.034 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
          </svg>
        ))}
      {halfStar === 1 && (
        <svg xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.034 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        </svg>
      )}
      {Array(emptyStars).fill(0).map((_, index) => (
          <svg key={`empty ${index}`} xmlns="http://www.w3.org/2000/svg"
           className="h-5 w-5 text-gray-300" 
           viewBox="0 0 20 20" 
           fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.286-3.974a1 1 0 00-.364-1.118L2.034 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
          </svg>
        ))}
    </div>
  );


}


function DressCard({
    id, 
    name, 
    image, 
    description, 
    pricePerDay, 
    sizesAvailable, 
    colorsAvailable, 
    category, 
    availability, 
    rating
 }) {
  return (
     <div className="bg-white w-[350px] m-6 px-4 py-6 rounded-lg shadow-lg"
    key={id}>
      <span className="bg-gray-100 text-white-800 text-sm rounded-sm px-2">
        
       <span className="ml-1"> {category}</span>  
        </span>

       {/* Image*/}
     <img
      src="https://thumbs.dreamstime.com/b/elevated-view-designer-dress-white-background-high-quality-resolution-beautiful-photo-concept-214356554.jpg"
      alt={name}
      className="w-full h-48 object-cover" />
      <h3 className="text-lg md:xl font-semibold mt-4 text-slate-700">{name}</h3>
       &nbsp; <hr className="py-1" />

       {/* Price/hour*/}
      <span className=" bg-gray-200 text-gray-800  top-[160px] right-0  px-2 border-gray-300 rounded-r-full border-l-0 ">
          {...pricePerDay}</span>

           {/* Rating */}           
        <span className=" absolute  ml-5"> <RatingStars rating={rating} /> ({rating.toFixed(1)})
        </span>

           {/*Description*/}
      <p className="text-gray-600 mt-2">
        {description}
         
      </p>
    </div>
  );
}

export default DressCard;
