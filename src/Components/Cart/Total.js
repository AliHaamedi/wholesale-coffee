import { useSelector } from "react-redux";


function Totall() {
    const {inOrdering} = useSelector((state) => state.cart)
    console.log(inOrdering)
    return (
        <div className="flex justify-around">
            <button className="border-2 border-red-500 bg-red-300 px-2 mx-2">خالی کردن سبد خرید</button>
            <h1>وزن کل: </h1>
            <h1>قیمت کل: </h1>
        </div> );
}

export default Totall;