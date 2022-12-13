import './Navbar.css'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Navbar(){
    return(
       <div className='nav_container'>
           <div className='nav_wrapper'>
                <div className='nav_left'>
                    <span>EN</span>
                    <div className='navbar_search'>
                       <input placeholder='search'/>
                       <BiSearch className='search_icon'/>
                    </div>
                </div>
                <div className='nav_center'>
                    <h1 className='nav_logo'>
                         LAMA
                    </h1>
                </div>
                <div className='nav_right'>
                    <div>REGISTER</div>
                    <div>SIGN IN</div>
                    <div className='nav_cart'>
                        <AiOutlineShoppingCart className='nav_cart_icon'/>
                        <span>4</span>
                    </div>
                </div>
           </div>
       </div>
    )
}
export default Navbar