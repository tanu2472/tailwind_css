import ReviewCard from "./ReviewCard";
import { REVIEW_CONFIG } from '../config/CommonConfig';


function ReviewSection() {
  return (
    <div >
       <h2 className='text-center text-gray-600 text-4xl my-6 py-[50px] pt-[100px]'>
         What Our Customers Say... 
      </h2>
      <div className="flex flex-wrap justify-center ">
      {REVIEW_CONFIG.map((reviewObj) =>{
       const { name, review, rating, avatar } = reviewObj;
       const numericRating = Number(rating) || 0;
        return (<ReviewCard
          name={name}
          review={review}
          rating={numericRating}
          avtar={avatar}
          key={name}
        />);
       })}
    </div>
    </div>
  );
}

export default ReviewSection;
