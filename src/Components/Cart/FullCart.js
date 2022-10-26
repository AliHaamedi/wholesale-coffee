function FullCart() {
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
                <tr className="text-center">
                    <td>1</td>
                    <td>روبوستا</td>
                    <td>۳۰٪</td>
                    <td>۲۲۰ گرم</td>
                    <td>۴۵.۰۰۰</td>
                    <td><button>*</button></td>
                </tr>
        </tbody>
        </table>
    </div> 
    );
}

export default FullCart;