import React from 'react'
import {Link} from 'react-router-dom';
import data from './data';

const Product = () => {
    const firstData = data.images;
    const newData = firstData.slice(0, 12);
    const productList = newData.length ? (
        newData.map(image => {
            return (
                <div className="Product" key={image.id}>
                    <div className="product-holder" >
                        <Link to="/ProductSingle"><img src={image.product}  alt=""/>
                            <h4>text text text</h4>
                            <h4>$10</h4>
                        </Link>
                    </div>
                </div>
            )     
        }
        )): (<p>You have no product</p>);

    const fullProduct = () => {
        return (
            <div className="product-page">
                <div className="next-page">
                    <Link href="/">
                    <img src="/assets/img/arrow-circle-right.svg" alt=""/>
                    <h3>See All</h3>
                    </Link>
                </div>
            </div>   
        )
    }

        

    return (
            <div>
                <div className="Product-tag" >
                    <button>Product Category</button>
                    <div className="Product-container">
                                {productList},
                                {fullProduct()}
                    </div>
                </div>
                <div className="Product-tag" >
                    <button>Product Category</button>
                    <div className="Product-container">
                                {productList},
                                {fullProduct()}
                    </div>
                </div>
            </div>
    )
}

export default Product
