import { useSelector } from 'react-redux'
import DefulteState from './DefulteState';
import OrderingState from './OrderingState';


function CoffeeList() {
    const { name , price , description , image} = useSelector(state => state.coffeeList.list);
    const { ordering ,remainingWeight } = useSelector(state => state.coffeeList)

    return ( 
        <div className='flex border-2 border-slate-600 rounded-xl m-2'>
            <img src={image} width="200px" height="200px" alt='coffee'/>
            <div>
                <h2>{name} هر کیلو {price} تومان</h2>
                {ordering? <OrderingState remainingWeight={remainingWeight} price={price} /> : <DefulteState description={description}/>}
            </div>
        </div>
     );
}

export default CoffeeList;