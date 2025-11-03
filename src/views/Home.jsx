import './Home.css'
import Navbar from '../components/navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from "../components/FeaturesSection"
import ReviewSection from '../components/ReviewSection';



function Home() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <ReviewSection/>
   </div>
  )
}



  
export default Home;
