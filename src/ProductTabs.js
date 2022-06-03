import React from 'react';
import ProductReview from './ProductReview';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const ProductDescription = () => {

const ProductDescription = () => {
    return (
                <div className="content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Minima esse ad neque sint sed commodi fugiat eveniet hic quisquam voluptas, 
                        debitis recusandae repellendus natus nisi harum officiis.
                            Eaque, at saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Minima esse ad neque sint sed commodi fugiat eveniet hic quisquam voluptas, 
                        debitis recusandae repellendus natus nisi harum officiis.
                            Eaque, at saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Minima esse ad neque sint sed commodi fugiat eveniet hic quisquam voluptas, 
                        debitis recusandae repellendus natus nisi harum officiis.
                            Eaque, at saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Minima esse ad neque sint sed commodi fugiat eveniet hic quisquam voluptas, 
                        debitis recusandae repellendus natus nisi harum officiis.
                            Eaque, at saepe?Eaque, at saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Minima esse ad neque sint sed commodi fugiat eveniet hic quisquam voluptas, 
                        debitis recusandae repellendus natus nisi harum officiis.
                            Eaque, at saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Minima esse ad neque sint sed commodi fugiat eveniet hic quisquam voluptas, 
                        debitis recusandae repellendus natus nisi harum officiis.
                            Eaque, at saepe?Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Minima esse ad neque sint sed commodi fugiat eveniet hic quisquam voluptas, 
                        debitis recusandae repellendus natus nisi harum officiis.
                            Eaque, at saepe?
                            </p>
                </div>                
        )
    }


    return (
      <div className="product-description">
                  <Tabs defaultActiveKey="Description" id="uncontrolled-tab-example">
                      <Tab eventKey="Description" title="Description">
                          {ProductDescription()}
                      </Tab>
                      <Tab eventKey="Reviews" title="Reviews">
                            <ProductReview/>
                      </Tab>
                  </Tabs>
              </div>
    )
}

export default ProductDescription
