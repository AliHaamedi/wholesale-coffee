import { useSelector } from 'react-redux'
import CoffeeItem from './CoffeeItem';


function CoffeeList() {
    const { name , price , description , image} = useSelector(state => state.coffeeList.list);

    return (
        <div className='basis-1/2 border-2 border-slate-600 rounded-xl m-2'>
        <CoffeeItem name={name} price={price} description={description} image={image}/>
        </div>
    );
}

export default CoffeeList;




