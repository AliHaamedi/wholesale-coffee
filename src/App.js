import React from 'react';
import Cart from './Components/Cart/Cart';
import CoffeeList from './Components/List/CoffeeList';

function App() {
  return (
    <div className="container mx-auto flex">
      <CoffeeList/>
      <span className=''>-</span>
      <Cart />
    </div>
  );
}

export default App;
