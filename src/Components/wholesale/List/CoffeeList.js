import { useSelector } from 'react-redux'
import CoffeeItem from './CoffeeItem';


function CoffeeList() {
    const {list} = useSelector(state => state.coffeeList);
    return (
        <div className='basis-1/2 border-2 border-slate-600 rounded-xl m-2'>
            <ul>
            {list.map((i)=><li key={i.id}> <CoffeeItem name={i.name} price={i.price} description={i.description} image={i.image}/> </li>)}
            </ul>
        </div>
    );
}

export default CoffeeList;