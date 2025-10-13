
function FeatureCard({title, description, icon}) {
  return (
          <div key={title} className='bg-pink-200 m-4 px-4 py-6 h-[150px] w-[400px]  rounded-lg shadow-lg flex items-end'>

            <div className=" flex justify-center items-center w-[100px] h-[100px] 
                             bg-white-200  p-4 shadow-xl rounded-md">
                {icon}
             </div>
             <div className="ml-6">

            <h3 className={"text-xl mb-2  mt-6 font-semibold "} > {title}</h3>
            <p className=" text-gray-600">{description}</p>

           </div>
           </div>
        );
}

export default FeatureCard;
