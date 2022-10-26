import FullCart from "./FullCart";
import EmptCart from "./EmptCart"

function Cart() {
    return ( 
        <div className="basis-1/2 border-2 border-slate-600 rounded-xl m-2 ">
            <h1>سبد خرید</h1>

            <FullCart/>
            <EmptCart />
        </div>
     );
}

export default Cart;