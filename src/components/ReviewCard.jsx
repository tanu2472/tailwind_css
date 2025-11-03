import imgStar from './../assets/star.png';
import imgUnStar from './../assets/unstar (1).png';

function ReviewCard({name, review, rating, avtar, avatar}) {
  return (
    <div className=" bg-white mx-4 pb-8 px-6  my-4 py-4  rounded-md shadow-xl flex w-[600px] justify-around">
      <img 
             src={avatar || avtar}
       alt={`${name}'s avatar`}
       className=" w-20 h-20  rounded-full mr-6" />

        <div>
            <h3 className=" text-lg font-semibold">{name}</h3>
            
            
            {new Array(rating).fill().map((_,i) => {
                return (
                    <img 
                    src={imgStar} 
                    alt="star"
                    className=" inline-block w-4 h-4 mr-2"
                    key={i}
                    />
                )
            })}
        {new Array(5-rating).fill().map((_,i) => {
                return (
                    <img 
          src={imgUnStar} 
                    alt="Unstar"
                    className=" inline-block w-4 h-4 mr-2"
                    key={i}
                    />
                )
            })}

            <p className=" text-gray-600">{review}</p>
        </div>
    </div>
  );
  
}

export default ReviewCard;
