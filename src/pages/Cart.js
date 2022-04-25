import React from 'react';
import {useSelector , useDispatch} from "react-redux";
import "./cart.css"
import {remove} from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)
  const handleRemove = (productId) => {
    dispatch(remove(productId))
  } 

  return (
    <div className='App'>
    <h3 className='my-products'>My Cart Items</h3>
    <div className='cartWrapper'>
    {products.map((product) => {
             return (
             <div className=' cart2' key = {product.id}>
                <img src =  {product.image}  alt = "image1" className='product-image2'/>
                <h4 className='title2'>{product.title}</h4>
                <h5 className='price2'> Rs. {product.price}</h5>
            
                <button  type = "btn" className='btn' onClick = {() => handleRemove(product.id)}>Remove</button>
             </div>
             )
         })}
    </div>
        
    </div>
  );
}

export default Cart;

