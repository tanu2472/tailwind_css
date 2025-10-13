import {Shirt, HandCoins, Motorbike,Leaf,Headset,ShieldMinus} from 'lucide-react';


export const FEATURES_CONFIG = [
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

export default { FEATURES_CONFIG};
