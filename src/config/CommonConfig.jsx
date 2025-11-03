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

export const REVIEW_CONFIG = [
  {
    name: 'Alice Johnson',
    review: 'Amazing experience! The dress was stunning and fit perfectly. Highly recommend DressOnRent for anyone looking for quality and style.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    name: 'Shreya Wagh',
    review: 'I rented a dress for a wedding and received so many compliments! The process was easy, and the customer service was top-notch.',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    name: 'Michael Smith',
    review: 'The rental process was smooth and hassle-free. The dress arrived on time and looked even better in person. Will definitely use DressOnRent again!',
    rating: 4,
    avatar: 'https://i.pravatar.cc/150?img=8'
  },
  {
    name: 'Emily Davis',
    review: 'I was a bit nervous about renting a dress online, but DressOnRent exceeded my expectations. The quality was excellent, and the fit was perfect. I felt like a million bucks!',
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?img=9'
  }
];
export const PRODUCTS_CONFIG = [
  {
    id: 1,
    name: 'Elegant Evening Gown',
  },

 {
    id: 2,
    name: 'Classic Black Tuxedo',
 },
];

export default { FEATURES_CONFIG, REVIEW_CONFIG , PRODUCTS_CONFIG};

