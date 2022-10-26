import { useDispatch } from 'react-redux'

function DefulteState ({description, toggleOrdering}){
    const dispatch = useDispatch()
    return(
        <>
            <p>{description}</p>
            <button className='border-2 border-amber-500 bg-gray-300' onClick={() => toggleOrdering()} >استفاده از این دانه در میکس سفارشی</button>
        </>
    )
}

export default DefulteState;