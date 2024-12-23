import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { itemContext } from '../context/ItemContext';

const Navbar = () => {
  const { cart } = useContext(itemContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <h1 className='ecommerce'>E-Commerce</h1>
      </div>
      <div className='navbar-items'>
        <div className='cart-num' onClick={toggleCartVisibility}>
          <FontAwesomeIcon icon={faCartShopping} size="2x" />
          <span>{cart.length}</span>
        </div>
        {isCartVisible && (
          <div className='cart-dropdown'>
            {cart.length > 0 ? (
              cart.map((item) => (
                <div key={item._id} className='cart-item'>
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>${item.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;