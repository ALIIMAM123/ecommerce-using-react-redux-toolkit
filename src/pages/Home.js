import React from 'react';
import Product from '../Components/Product';

const Home = () => {
  return (
    <div>
        <h2 className='heading'>Welcome to the Redux toolkit Store</h2>
        <section className='product-container'>
           <h3 className='product-Details'>MY PRODUCTS</h3>
    
           <Product/>
          
         
        </section>
    </div>
    
  );
}

export default Home;
