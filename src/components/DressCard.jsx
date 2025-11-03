

function DressCard({id, 
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
    <div className="bg- ">
     <img src="https://etsy.com/market/high_quality_dresses" alt={name}
     className="w-full h-48 object-cover" />
    </div>
  )
}

export default DressCard;
