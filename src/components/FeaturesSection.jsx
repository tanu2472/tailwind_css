import {Shirt, HandCoins, Motorbike,Leaf,Headset,ShieldMinus} from 'lucide-react';


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
      <h2 className='text-center text-3xl pt-[100px]'>
         Why Choose DOR (Dress On Rent) ?
      </h2>
      <div className='flex flex-wrap justify-around '>
        {FEATURES_CONFIG.map((featureObj) => {
             const { title, description, icon ,iconColor} = featureObj;

          return (
          <div key={title}className='bg-pink-200 m-4 p-4'>
            <div className=" flex justify-center items-center w-[100px] h-[100px] 
            bg-white-400 mx-auto shadow-md rounded-md">{icon}</div>
            <h3 className={"text-xl"} > {title}</h3>
            <p>{description}</p>
           </div>
        );

        })}
      </div>
    </div>
  );
}

export default FeaturesSection;
