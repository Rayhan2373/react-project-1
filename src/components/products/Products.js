import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(  ()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
        .then( data => setProducts(data))
    },[])
    return (
        <div>
            <h1>Products{products.length}</h1>
            <div className='full-product-list'>
                {
                    products.map( product=><Product product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;