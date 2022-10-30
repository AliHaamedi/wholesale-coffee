import React from 'react';
import {BrowserRouter , Routes , Route} from "react-router-dom"
import NavBar from './Components/Header/NavBar';
//import Cart from './Components/Cart/Cart';
//import CoffeeList from './Components/List/CoffeeList';

function App() {
  return (
    <div className="container mx-auto flex">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element='' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
