import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './views/Home';
import AllDress from './views/AllDress';
import Booking from './views/Booking';
import DressDetails from './views/DressDetails';

import { Contact } from 'lucide-react';


const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
     <div>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<AllDress/>} />
        <Route path="/about" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/book-now" element={<Booking/>} />
       <Route path="/dress-details" element={<DressDetails/>} />
     </Routes>
     </BrowserRouter>
    </div>

);
