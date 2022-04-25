import React from 'react';
import { Link } from 'react-router-dom';
import  {useSelector} from "react-redux"                                       //to show cart item fetching data from store 


const Navbar = () => {
 // By using useSelector we can subscribe any data .Means whenever data change we can get the new data from useSelector 
  const items = useSelector((state) => state.cart)       // subscribing cart and its all state . Now whenever cart changes new value comes and store in items  amd we will get new value in item and whenever new value will add our component will re-render                      
  return (
    <div className='nav-container'>
 <span className='logo'>REDUX STORE</span>
 <div className='navlinks'>
    <Link className = "navLink navlink-home" to = "/">Home</Link>
    <Link className = "navLink nav-link-cart" to  = "/cart">Cart</Link>
    <span className='cartCount'> Cart item : {items.length}</span>
 </div>
    </div>
  );
}

export default Navbar;
