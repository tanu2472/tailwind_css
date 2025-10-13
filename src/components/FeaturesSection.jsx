import FeatureCard from './FeatureCard';

import { FEATURES_CONFIG } from '../config/CommonConfig';



function FeaturesSection() {
  return (
    <div className='pb-[40px]'>
      <h2 className='text-center text-gray-600 text-4xl my-6 py-[50px] pt-[100px]'>
         Why Choose <span className='font-extrabold text-pink-600'>D</span>ress
          <span className='font-extrabold text-pink-600'> O</span>n 
          <span className='font-extrabold text-pink-600'> R</span>ent ?
      </h2>
      <div className='flex flex-wrap justify-around '>
        {FEATURES_CONFIG.map((featureObj) => {
             const { title, description, icon} = featureObj;

          return (
          <FeatureCard
           title={title}
           description={description}
           icon={icon} 
           key={title}  />
        );

        })}
      </div>
    </div>
  );
}

export default FeaturesSection;
