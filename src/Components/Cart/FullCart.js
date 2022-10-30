import Totall from "./Total"
import { useSelector } from "react-redux"



function FullCart() {
    const { inOrdering } = useSelector(state=>state.cart)

    let num = 1
    return ( 
    <div className="w-full flex flex-col justify-between h-screen">
        <table className="w-full m-2">
        <tbody>
                <tr className="border-2">
                    <th>آیتم</th>
                    <th>نام کالا</th>
                    <th>وزن</th>
                    <th>قیمت</th>
                </tr>
                {inOrdering.map((item)=>
                    <tr key={item.cartID} className="text-center">
                    <td>{num ++}</td>
                    <td>{item.name}</td>
                    <td>{item.weight}</td>
                    <td>{item.cartPrice}</td>
                </tr>
                )}
        </tbody>
        </table>

        <Totall />
    </div> 
    );
}

export default FullCart;