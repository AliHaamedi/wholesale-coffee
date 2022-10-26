import { useState } from 'react';
import { toggle } from '../../features/coffeeList/coffeeListSlice';
import { useDispatch } from 'react-redux'

function OrderingState ({remainingWeight, price}) {
    const[vazn , setVazn] = useState(50)
    const[gheymat , setGheymat] = useState(price / 1000 * vazn);
    function moving(e){
        setVazn(e.target.value)
        setGheymat(price/ 1000 *  e.target.value)
    }


    const dispatch = useDispatch()

    return (
        <>
            <div>
                <label htmlFor="vol">انتخاب وزن بین 50 تا {remainingWeight} گرم</label>
                <input type="range" id="vol" name="vol" value={vazn} onChange={(e)=> moving(e)} step="50" min="50" max={remainingWeight}  />
            </div>
            <div>
                <button className='border-2 border-amber-500 bg-gray-300'onClick={() => dispatch(toggle())} >لغو</button>
                <button className='border-2 border-amber-500 bg-gray-300'>افزودن به سبد خرید</button>
                <h2>وزن: {vazn} گرم</h2>
                <h2>قیمت: {gheymat} تومان</h2>
            </div>
        </>
    )
}

export default OrderingState;