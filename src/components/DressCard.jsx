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
 
const styleObj = CATEGORY_STYLES[category] || {}

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
    <div className="bg-white w-[350px] m-4 px-4 py-6 rounded-lg"
    key={id}>
      <span className={`${styleObj.bgColor} ${styleObj.textColor} text-sm rounded-sm px-2`}>
          {styleObj?.bgColor}
       <span className="ml-1">
        {category}
      </span>
      </span>
     <img
      src="https://thumbs.dreamstime.com/b/elevated-view-designer-dress-white-background-high-quality-resolution-beautiful-photo-concept-214356554.jpg"
      alt={name}
      className="w-full h-48 object-cover" />
      <h3 className="text-lg md:xl font-semibold mt-4 text-slate-700">{name}</h3>
      <p className="text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
}

export default DressCard;
