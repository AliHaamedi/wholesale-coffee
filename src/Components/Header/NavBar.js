import logo from "../../assets/img/coffee.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

function NavBar() {
    return ( 
        <div className="shadow-xl flex justify-between w-full items-center">
            <div className="flex items-center">
                <img src={logo} width="60px" alt="logo" className="p-2"/>
                <div className="flex">
                    <Link to="/"><h1 className="px-3 hover:text-orange-500 transition-all duration-300">خانه</h1></Link>
                    <Link to="/wholesale"><h1 className="px-3 hover:text-orange-500 transition-all duration-300">فروشگاه</h1></Link>
                    <Link to="/"><h1 className="px-3 hover:text-orange-500 transition-all duration-300">درباره ما</h1></Link>
                </div>
            </div>
            <div className="flex p-2 cursor-pointer relative" >
            <span className="absolute -top-3">0</span>
            <FontAwesomeIcon icon={ faCartShopping } size="xl"/>
            </div>
        </div>
    );
}

export default NavBar;