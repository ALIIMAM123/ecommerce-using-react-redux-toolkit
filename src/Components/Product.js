import React, { useState , useEffect} from 'react';
import { add } from '../store/cartSlice';
import { useDispatch , useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';        // with dispatch hook we can dispatch thunk too.
import { STATUSES } from '../store/productSlice';
import { FaSpinner } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";




const Product = () => {
    // const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const {data:products ,status} = useSelector((state)=>state.product);

    // on Component load , fetching product

    useEffect(() => {
       dispatch(fetchProducts())
      // const fetchProducts = async() => {
      //     const res = await fetch("https://fakestoreapi.com/products")
      //     const data = await res.json()
      //     console.log(data)
      //     setProducts(data)
      //   }

      // fetchProducts()
    }, [])

 
    const handleAdd = (product) => {
       // from here adding product to redux store 
          dispatch(add(product))
    }

    if(status === STATUSES.LOADING){
      return <div className='spinner' style={{display:"flex", AlignItems: "center", justifyContent: "center"}}>
      <FaSpinner style={{width:"80px", height:"80px", color: "grey"}} />
      </div>
    }

    if (status === STATUSES.ERROR){
      return (
      <div className='error-container' style={{ display:"flex", alignItems: "center", justifyContent:"center"}}>
       <h1 className='error-message'> <FiAlertCircle  color = "red" style = {{width:"80px" , height :"80px" }} /> <span  style = {{textAlign:"center", fontSize:"40px", color: "grey", fontWeight:"800"}}> 404 Something Went Wrong</span> </h1>
      </div>
      )
     
    }

  return (
    <div className='productsWrapper'>
         {products.map((product) => {
             return (
             <div className=' cart' key = {product.id}>
                <img src =  {product.image}  alt = "image1" className='product-image'/>
                <h4 className='title'>{product.title}</h4>
                <h5 className='price'> Rs. {product.price}</h5>
            
                <button  type = "btn" className='btn' onClick = {() => handleAdd(product)}>Add To Cart</button>
             </div>
             )
         })}
    </div>
  );
}

export default Product;
