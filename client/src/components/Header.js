import React, {useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { itemContext } from '../context/ItemContext';

const Navbar = () => {
    const { itemsInCart, totalPrice } = useContext(itemContext);

    return (
        <nav className='navbar'>
            <div className='navbar-brand'>
                <h1 className='ecommerce'>E-Commerce</h1>
            </div>
            <div className='navbar-items'>
                <h3 style={{color: 'white'}}>
                    total price: ${totalPrice}
                </h3>
                <div className='cart-num'>
                    <FontAwesomeIcon icon={faCartShopping} size="2x" />
                    <span>{itemsInCart}</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;