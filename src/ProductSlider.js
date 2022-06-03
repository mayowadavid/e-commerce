import React, { Component } from "react";
import Slider from "react-slick";
import data from './data';

export default class ProductSlider extends Component {

  images = data.images;     

    imageList = this.images.length ? ( 
      this.images.map(image => {      
        return ( 
                    <div className ="Product-slide"  key={image.id}>
                        <img src={image.picture} alt=""/>
                    </div>
                )
        })) : (<p> You have no images </p>);

  render() {
    const settings = {
      autoplay: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '100px',
    };
    return (     
        <Slider {...settings}>
         {this.imageList}
        </Slider>
    );
  }
}