import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import myImage from './assets/woman-clothes.png'

createRoot(document.getElementById('root')).render(
 
      
 <div className='flex bg-blue-200 h-screen '>

    <h1 className='text-center text-3xl font-bold'> I'm Learning Tailwind CSS </h1>

  <div className='bg-pink-200 w-[200px] h-[300px] mt-20 p-4 mx-auto 
  rounded-4xl border-2 border-black-50 border-r-4'>
     <h1 className=' p-5 text-center'>MY CARD</h1>
  <img  src={myImage} alt='dress'  className="blur-sm hover:blur-none drop-shadow-2xl"/>
  
  </div>
   <div className='bg-pink-200 w-[200px] h-[300px] mt-20 p-4 mx-auto 
  rounded-4xl border-2 border-black-50 border-r-4'>
     <h1 className=' p-5 text-center'>MY CARD</h1>
  <img  src={myImage} alt='dress'  className="brightness-150 "/>
  
  </div>
   <div className='bg-pink-200 w-[200px] h-[300px] mt-20 p-4 mx-auto 
  rounded-4xl border-2 border-black-50 border-r-4'>
     <h1 className=' p-5 text-center'>MY CARD</h1>
  <img  src={myImage} alt='dress'  className="brightness-150  shadow-2xl"/>
  
  </div>
  </div> 
)
