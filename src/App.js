import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import NavBar from './Components/Header/NavBar';
import HeroSection from './Components/HeroSection/HeroSection';
import Wholesale from './Components/wholesale/Wholesale';

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<HeroSection />} />
          <Route path='/wholesale' element={<Wholesale />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
