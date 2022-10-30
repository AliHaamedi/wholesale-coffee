import FullCart from "./FullCart";
import EmptCart from "./EmptCart"
import {useSelector} from "react-redux"


function Cart() {
    const {inOrdering} = useSelector(state => state.cart)
    
    return ( 
        <div className="basis-1/2 border-2 border-slate-600 rounded-xl m-2 flex flex-col">
            <h1 className="text-center text-xl p-3 bg-red-300">سبد خرید</h1>
            {inOrdering.length > 0 && <FullCart /> }
            {inOrdering.length === 0 && <EmptCart />}
        </div>
     );
}

export default Cart;