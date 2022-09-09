import React from 'react';
import { Button } from 'react-bootstrap';
import './Product.css'
import ReactModal from '../React-Modal/ReactModal';

const Product = ({ product }) => {
    console.log(product)
    const { category, image, title, id, rating, price, description } = product

    return (
        <div className='all-details'>
            <div>
                <img className='img' src={image} alt='' />
            </div>
            <div className='name'>
                <h2>{title.slice(0, 17)}</h2>
            </div>
            <div>
                <p className='info'>Category : {category}</p>
                <p className='info'>price : ${price}</p>
            </div>
            <div>
                <Button size='sm' variant="success">Add to Cart</Button>{' '}
                <Button size='sm' variant="danger">Delete</Button>{' '}
                    <ReactModal product={product} ></ReactModal>{' '}
                
            </div>
        </div>
    );
};

export default Product;