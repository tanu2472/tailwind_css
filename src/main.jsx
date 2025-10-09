import { createRoot } from 'react-dom/client';
import { BrowserRouter,Routes ,Route} from 'react-router';
import './index.css';
import Home from './views/Home';
import HeroSection from './components/HeroSection';


const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
     <div>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
       
     </Routes>
     </BrowserRouter>
    </div>

);
