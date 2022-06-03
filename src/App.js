import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import ProductSingle from './ProductSingle';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Shop from './Shop';
import Cart from './Cart';







class App extends Component { 
  
  render() {
   
  return (
      <BrowserRouter>
        <ScrollToTop />
          <div className="body">
              <Navbar/>
              <Route path="/" exact component={Home}/>
              <Route path="/ProductSingle" component={ProductSingle}/>
              <Route path="/Shop" component={Shop}/>
              <Route path="/Cart" component={Cart}/>
              <Footer />
          </div>
      </BrowserRouter>
    );
  }
}


export default App;