import React from 'react';
import Cart from './Components/Cart/Cart';
import CoffeeList from './Components/List/CoffeeList';

function App() {
  return (
    <div className="container flex">
      <CoffeeList/>
      <Cart />
    </div>
  );
}

export default App;
