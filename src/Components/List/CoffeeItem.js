import DefulteState from './DefulteState';
import OrderingState from './OrderingState';
import { useSelector } from 'react-redux';
import { useState } from 'react';


function CoffeeItem({name , price , description , image}) {
    const {remainingWeight} = useSelector(state => state.coffeeList)
    const [ordering , setOrdering] = useState(false)

    function toggleOrdering(){
        setOrdering(!ordering)
    }

    return ( 
        <div className='flex border-2 border-slate-600 rounded-xl m-2 '>
            <img className='m-2' src={image} width="200px" height="200px" alt='coffee'/>
            <div className='flex flex-col justify-between'>
                <h2>{name} هر کیلو {price} تومان</h2>
                {ordering? <OrderingState remainingWeight={remainingWeight} price={price} toggleOrdering={toggleOrdering} name={name} /> : <DefulteState description={description} toggleOrdering={toggleOrdering}/>}
            </div>
        </div>
     
     );
}

export default CoffeeItem;