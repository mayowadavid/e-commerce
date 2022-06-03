import React, { Component } from "react";
import Slider from "react-slick";
import data from './data';

export default class productTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
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
                            <div ><img id="bigprev" src={image.product} key={image.id} alt=""/></div>       
                    ) }
        )): (<p>You have no products images</p>);

        singleProductList =  this.images.length ? (
            this.images.map(image => {
                        return(
                                <div><img id="e-product" src={image.product} key={image.id} alt=""/></div>      
                        ) }
            )): (<p>You have no products images</p>);
    

   

  render() {
    return (
      <div>
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
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
          centerMode={true}
          
        >
          {this.singleProductList}
        </Slider>
      </div>
    );
  }
}