import React, { Component } from "react";
import Slider from "react-slick";
import ProductDetails from './ProductDetails';
import ProductTabs from './ProductTabs';
import QualityControl from './QualityControl';
import data from './data';


export default class ProductSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
    
    images = data.images;
   

    singleThumbList =  this.images.length ? (
        this.images.map(image => {
                    return(
                            <div key={image.id}><img id="bigprev" src={image.product}  alt=""/></div>       
                    ) }
        )): (<p>You have no products images</p>);

      singleProductList =  this.images.length ? (
          this.images.map(image => {
                      return(
                              <div key={image.id}><img id="e-product" src={image.product}  alt=""/></div>      
                      ) }
          )): (<p>You have no products images</p>);



        relatedProduct =  this.images.length ? (
          this.images.map(image => {
                      return(
                              <div className="related-card" key={image.id}>
                                  <img src={image.product}  alt=""/>
                                  <div className="trapped">
                                      <h5>Title</h5>
                                      <h5>price</h5>
                                  </div>
                                  
                              </div>       
                      ) }
          )): (<p>You have no products images</p>);

  render() {
    
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3.5,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '132px',
    };
    
    return (
            <div>
              <div className="product-detail">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                      <Slider
                      asNavFor={this.state.nav2}
                        ref={slider => (this.slider1 = slider)}
                        fade={true}
                      >
                          {this.singleThumbList}
                      </Slider>
                      <Slider
                      asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}
                        slidesToShow={3}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        centerMode={true}
                        >  
                           {this.singleProductList}
                      </Slider>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xl-6">
                    <ProductDetails/>
                  </div>
                </div>
              </div>
                <QualityControl/>
                <ProductTabs/>
            
              <div className="related-wrapper">
                <h3>Related Product</h3>
                  <Slider {...settings}>
                  {this.relatedProduct}
                  </Slider>
              </div>
            </div>
    );
  }
}