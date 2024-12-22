import React, {useContext} from 'react';
import {itemContext} from '../context/ItemContext';

const ProductItem = ({product}) => {
    const {addToCart, removeFromCart} = useContext(itemContext)
    const handleAddToCart = (product) => {
        console.log(product)
        addToCart(product)
    };
    const handleRemoveFromCart = (product) => {
        console.log('removed product:',product)
        removeFromCart(product)
    };

    return (
        <div className="product-card">
            <img className="product-image"
                src={product.image}
                alt={product.name} />
            <div className="prodcut-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                <button onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default ProductItem;