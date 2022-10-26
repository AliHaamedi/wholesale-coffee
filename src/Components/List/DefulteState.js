import { useDispatch } from 'react-redux'
import { toggle } from '../../features/coffeeList/coffeeListSlice';

function DefulteState ({description}){
    const dispatch = useDispatch()
    return(
        <>
            <p>{description}</p>
            <button className='border-2 border-amber-500 bg-gray-300' onClick={() => dispatch(toggle())} >استفاده از این دانه در میکس سفارشی</button>
        </>
    )
}

export default DefulteState;