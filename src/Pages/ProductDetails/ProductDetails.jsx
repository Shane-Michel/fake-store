import React, { useContext, useEffect, useState } from 'react'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { CartContext } from '../../Context/CartContext';

function ProductDetails() {

    const {productId} = useParams();
    const [productDetail, setProductDetail] = useState('');

    const {items, addItems, removeItems} = useContext(CartContext);
    const [isInCart, setIsInCart] = useState(items);

    useEffect(
        () => {
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            .then(res => {
                setProductDetail(res.data);
            })
            .catch(err=>console.log(err))
        }, []
    )

    // need to check if this item is in cart any time cart changes
    useEffect(
        ()=> {
        setIsInCart(items.find(item => item.id == productId))
        }, [items]
    )

  return (
    <div className='productDetails-container'>
        <div className='product-container'>
            <img className='product-image' src={productDetail?.image} alt="product" />
            <div className='product-info'>
                <p className='product-title'>{productDetail?.title}</p>
                <p className='product-price'>${productDetail?.price}</p>
                <p className='description-holder'>Description</p>
                <p className='description'>{productDetail?.description}</p>
                
                    {
                        isInCart?
                        <button onClick={() => removeItems(productDetail?.id)}>Remove from Cart</button>
                        :
                        <button onClick={() => addItems(productDetail)}>Add to Cart</button>
                    }
                
            </div>
        </div>
    </div>
  )
}

export default ProductDetails