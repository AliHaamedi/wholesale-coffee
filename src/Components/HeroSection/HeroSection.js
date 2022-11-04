import heroImg from "../../assets/img/coffeeHeero.jpg"
import {Link} from 'react-router-dom'


function HeroSection() {
    return ( 
        <div className="flex p-4  flex-col md:flex-row">
            <div className="md:w-2/3 mx-auto my-12 md:my-24">
                <img src={heroImg} alt="hero" />
            </div>
            <div className=" flex flex-col justify-center md:w-1/2 items-center my-8 md:my-24">
                <h1 className="text-4xl my-6 font-yekan px-6">میدونستی میتونی میکس قهوتو خودت انتخاب کنی؟</h1>
                <p className="text-md px-6 my-6 self-start">با استی آپ از هر دانه ای که بخوای به هر اندازه ای که دوس دای قهوه سفارش بده</p>
                <Link to="wholesale"><button className="bg-orange-300 rounded-full py-1 px-3 self-start mr-24">بزن بریم!</button></Link>
            </div>
        </div>
     );
}

export default HeroSection;