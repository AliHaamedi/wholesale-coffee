import Totall from "./Total"
import { useSelector ,useDispatch} from "react-redux"
import { deleteItem } from "../../features/cart/cartSlice"



function FullCart() {
    const { inOrdering } = useSelector(state=>state.cart)
    const distpatch = useDispatch()
    function removeItem(cartID) {
        distpatch(deleteItem(cartID))
    }
    let num = 1
    return ( 
    <div className="w-full">
        <table className="w-full">
        <tbody>
                <tr className="border-2">
                    <th>آیتم</th>
                    <th>نام کالا</th>
                    <th>درصد</th>
                    <th>وزن</th>
                    <th>قیمت</th>
                    <th>حذف</th>
                </tr>
                {inOrdering.map((item)=>
                    <tr key={item.cartID} className="text-center">
                    <td>{num ++}</td>
                    <td className="text-start">{item.name}</td>
                    <td>۳۰٪</td>
                    <td>{item.weight}</td>
                    <td>{item.cartPrice}</td>
                    <td><button className="border-2 border-red-500 bg-red-300 px-2 mx-2" onClick={()=>removeItem(item.cartID)}>*</button></td>
                </tr>
                )}
        </tbody>
        </table>

        <Totall />
    </div> 
    );
}

export default FullCart;