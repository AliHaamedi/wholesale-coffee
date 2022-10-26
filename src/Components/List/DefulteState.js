
function DefulteState ({description, toggleOrdering}){
    return(
        <div className='flex flex-col justify-around items-center'>
            <h6 className='text-xs p-3'>{description}</h6>
            <button className='border-2 border-green-500 bg-green-200 p-1 mb-2' onClick={() => toggleOrdering()} >استفاده از این دانه در میکس سفارشی</button>
        </div>
    )
}

export default DefulteState;