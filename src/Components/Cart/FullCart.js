import { useSelector} from "react-redux"

function FullCart() {
    const { inOrdering } = useSelector(state=>state.cart)
    let num = 1
    let ids = 1
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
                    <tr key={ids ++} className="text-center">
                    <td>{num ++}</td>
                    <td className="text-start">{item.name}</td>
                    <td>۳۰٪</td>
                    <td>{item.weight}</td>
                    <td>{item.cartPrice}</td>
                    <td><button>*</button></td>
                </tr>
                )}
        </tbody>
        </table>
    </div> 
    );
}

export default FullCart;