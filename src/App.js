import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import NavBar from './Components/Header/NavBar';
import HeroSection from './Components/HeroSection/HeroSection';
//import Cart from './Components/Cart/Cart';
//import CoffeeList from './Components/List/CoffeeList';

function App() {
  return (
    <div className="container mx-auto">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HeroSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
