import React from 'react';
import Product from './product';
import ProductSlider from './ProductSlider';
import Category from './Categories';
import About from './About';

const Home = () => {
    return (
        <div>
            <ProductSlider/>    
            <Category/>
            <Product/> 
            <About/>
        </div>
    )
}

export default Home
