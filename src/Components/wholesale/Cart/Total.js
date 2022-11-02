import { useSelector } from "react-redux";

function Totall() {
    
    const {totalPrice , totalWeight} = useSelector((state) => state.cart)

    return (
            <div className="flex justify-around">
                <h1>وزن کل: {totalWeight}</h1>
                <h1>قیمت کل: {totalPrice}</h1>
            </div> 
        );
}

export default Totall;