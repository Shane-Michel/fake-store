import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';

function ProductDetails() {

    const {productId} = useParams();
    const [product, setProduct] = useState('');

    useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch(err=>console.log(err))
        }, []
    )

  return (
    <div className='productDetails-container'>
        <div className='product-container'>
            <img className='product-image' src={product?.image} alt="product" />
            <div className='product-info'>
                <p className='product-title'>{product?.title}</p>
                <p className='product-price'>${product?.price}</p>
                <p className='description-holder'>Description</p>
                <p className='description'>{product?.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails