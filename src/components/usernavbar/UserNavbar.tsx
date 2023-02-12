
import{Route, Routes, Link} from 'react-router-dom'
import {FaHome, FaShoppingCart, FaUserAlt} from 'react-icons/fa'

export const UserNavbar = () => {
    return(
        <div className="nav-container">
            <ul>
                <li>
                    <button className='btn-active'>
                        <Link to=""/>
                        <FaHome />
                        <p>Home</p>
                    </button>
                </li>
                <li>
                    <button>
                        <Link  to=""/>
                        <FaShoppingCart/>
                        <p>Cart</p>
                    </button>
                </li>
                <li>
                    <button>
                        <Link  to=""/>
                        <FaUserAlt/>
                        <p>Account</p>
                    </button>
                </li>
                
            </ul>
        </div>
    )
}