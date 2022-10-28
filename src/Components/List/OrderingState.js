import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice';
import { reduceReminingWeight } from "../../features/coffeeList/coffeeListSlice"

function OrderingState ({remainingWeight, price , toggleOrdering , name}) {
    const[vazn , setVazn] = useState(50)
    const[gheymat , setGheymat] = useState(price / 1000 * vazn);
    const[finished , setFinished] = useState(false)
    function moving(e){
        setVazn(parseInt(e.target.value))
        setGheymat(price/ 1000 *  e.target.value)
    }

    const dispatch = useDispatch()
    
    function addToCart (){
        dispatch(addItem({
            cartID : Date.now(),
            name,
            weight: vazn,
            cartPrice: gheymat,
            }))
        dispatch(reduceReminingWeight(vazn));
        setFinished(true)
    }

    const OrderingItem = ()=>{
        return <>
        <div className='m-2'>
                <label htmlFor="vol">انتخاب وزن بین 50 تا {remainingWeight} گرم</label> <br/>
                <input type="range" id="vol" name="vol" value={vazn} onChange={(e)=> moving(e)} step="50" min="50" max={remainingWeight}  />
            </div>
            <div className='m-2'>
                <h2>وزن: {vazn} گرم</h2>
                <h2>قیمت: {gheymat} تومان</h2>
                <button className='border-2 border-red-500 bg-red-300 px-2 mx-2'onClick={() => toggleOrdering()} >لغو</button>
                <button className='border-2 border-green-500 bg-green-300 px-2 mx-2' onClick={()=>addToCart()}>افزودن به سبد خرید</button>
            </div>
        </>
    }
    const OrderingItemFinisherd = ()=> {
        return (
            <div>
                <h1 className='bg-green-300'>{vazn} گرم با موفقیت به سبد خرید اضافه شد</h1>
            </div>
        )
    }

    return (
        <>
        {!finished ? <OrderingItem /> : <OrderingItemFinisherd />}
        </>
    )
}

export default OrderingState;