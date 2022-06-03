import React from 'react'

const ProductDetails = () => {
    return (
        <div className="product-details">
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <h1>$300</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Itaque soluta eius ea corporis at sapiente culpa fuga repellendus? 
                  Suscipit repellat nihil doloribus exercitationem vero ab fugit 
                  minus odio distinctio maxime!Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Itaque soluta eius ea corporis at sapiente culpa fuga repellendus? 
                  Suscipit repellat nihil doloribus exercitationem vero ab fugit 
                  minus odio distinctio maxime!</p>
                  <div className="product-features">
                    <h5>PRODUCT CODE: {}</h5>
                    <h5>SELECT VARIATION: {}</h5>
                    <h5>QUANTITY: {}</h5>
                  </div>
                  <div className="call-to-action">
                      <div className="button">Buy Now</div>
                      <div className="button">Add To Cart</div>
                  </div>
                  <div className="social-button">
                    <h3>Share This Product</h3>
                  </div>
        </div>
    )
}

export default ProductDetails
