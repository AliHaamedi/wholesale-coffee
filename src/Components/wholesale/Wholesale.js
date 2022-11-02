import Cart from './Cart/Cart';
import CoffeeList from './List/CoffeeList';



function Wholesale() {
    return ( 
        <div className='flex'>
            <CoffeeList />
            <Cart />
        </div>
     );
}

export default Wholesale;