import React,
{
    useContext, useEffect, useState
} from "react";
import ProductItem from "./ProductItem";
import { itemContext } from "../context/ItemContext";

const ProductList = () => {
    const { products} = useContext(itemContext);
    //console.log('products:', products);
    // keep a local state for sorted products
    const [sortedProducts, setSortedProducts]=
    useState([...products]);
        const [minPrice, setMinPrice]= useState(0);
        const [maxPrice, setMaxPrice]= useState(8000);
        //console.log("sortedProducts: ", sortedProducts )

        // no type filter represented by 'all'
        const [type, setType]= useState('all');

        useEffect(() => {
            setSortedProducts([...products])
            //console.log('products:', products);
        }, [products]);
    
        const handleSortByPrice = () =>{
            const sorted = [...sortedProducts].sort((a, b) => a.price - b.price);
            setSortedProducts(sorted);
        };

        const handleFilterByPriceRange = () => {
            const filtered = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
            setSortedProducts(filtered);
        };

        const handleFilterByType = () => {
            if(type === 'all'){
                setSortedProducts([...products]);
            } else {
                const filtered = products.filter(product => product.type === type);
                setSortedProducts(filtered);
            }
        };

        return (
            <div className='prdt-list'>
                <h2>Products</h2>
                <div className='filter-btn'>
                    <button onClick={handleSortByPrice}>Sort by Price</button>
                    <label>
                        Min Price:
                        <input type='number' value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />
                    
                    </label>
                    <label>
                        Max Price:
                        <input type='number' value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
                    </label>
                    <button onClick={()=> handleFilterByPriceRange()}>Filter by Price Range</button>
                    <label>
                        Filter by Type:
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value='all'>All</option>
                            <option value='Phone'>Phone</option>
                            <option value='Laptop'>Laptop</option>
                            <option value='Watch'>Watch</option>
                            <option value='Earbuds'>Earbuds</option>
                        </select>
                    </label>
                    <button onClick={handleFilterByType}>Filter by Type</button>
                </div>
                <ul className='item-card'>
                    {sortedProducts.map(product => (
                        <ProductItem key={product._id} product={product} />
                    ))}
                </ul>
                <div className='buy-btn'>
                    <button>Buy Now</button>
                </div>
            </div>
        )
}

export default ProductList;