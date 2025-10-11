import {Shirt, HandCoins, Motorbike,Leaf,Headset,ShieldMinus} from 'lucide-react';
import FeatureCard from './FeatureCard';


const FEATURES_CONFIG = [
  {
    title: 'Wide Collection',
    description: 'Choose from a vast collection of dresses for every occasion, style, and size.',
    icon: <Shirt className='h-[50px] w-[50px] text-pink-600'/>,
  },
  {
    title: 'Affordable Prices',
    description: 'Enjoy high-quality dresses at a fraction of the retail price.',
    icon: <HandCoins className='h-[50px] w-[50px] text-yellow-500'/>,
  
  },
  {
    title: 'Convenient Delivery',
    description: 'Get your dresses delivered to your doorstep with easy return options.',
    icon: <Motorbike className='h-[50px] w-[50px] text-red-500'/>,
    
  },
  {
    title: 'Sustainable Fashion',
    description: 'Support eco-friendly fashion by renting instead of buying new.',
    icon: <Leaf className='h-[50px] w-[50px] text-green-600' />,
    
  },
  {
    title: 'Customer Support',
    description: 'Our team is here to help you with any questions or concerns.',
    icon: <Headset className='h-[50px] w-[50px] text-blue-500'/>,
    
  },
  {
    title: 'Easy Maintenance',
    description: 'All dresses are professionally cleaned and maintained for your convenience.',
    icon: <ShieldMinus className='h-[50px] w-[50px] text-green-500'/>,
    
  }
];

function FeaturesSection() {
  return (
    <div>
      <h2 className='text-center text-gray-600 text-4xl my-6 pt-[100px]'>
         Why Choose <span className='font-extrabold text-pink-600'>D</span>ress
          <span className='font-extrabold text-pink-600'> O</span>n 
          <span className='font-extrabold text-pink-600'> R</span>ent ?
      </h2>
      <div className='flex flex-wrap justify-around '>
        {FEATURES_CONFIG.map((featureObj) => {
             const { title, description, icon ,iconColor} = featureObj;

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
