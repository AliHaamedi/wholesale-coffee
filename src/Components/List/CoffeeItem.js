import DefulteState from './DefulteState';
import OrderingState from './OrderingState';
import { useSelector } from 'react-redux';


function CoffeeItem({name , price , description , image}) {
    const {ordering , remainingWeight} = useSelector(state => state.coffeeList)


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

export default CoffeeItem;