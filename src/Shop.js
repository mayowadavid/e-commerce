import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import data from './data';
import Pagination from 'react-bootstrap/Pagination';

const Shop = () => {
    const [images] = useState(data.images);
    const [currentPage, setCurrentPage] = useState(1);
    const [datasPerPage] = useState(9);

    const indexOfLastPost = currentPage * datasPerPage;
    const indexOfFirstPost = indexOfLastPost - datasPerPage;
    const currentDatas = images.slice(indexOfFirstPost, indexOfLastPost);
    const allDatas = images.length;
    
    

    const newPage = (n) => {
        setCurrentPage(n);
    }
    
    const paginate = () => {
        let active = currentPage;
        let items = [];
        for (let number = 1; number <= Math.ceil(allDatas / datasPerPage); number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick = {() => newPage(number)}>
                {number}
            </Pagination.Item>,
        );
        }
        return <Pagination size="sm">{items}</Pagination>
    }
    

    const selectedProduct =  images.length ? (
        currentDatas.map(image => {
                    return(
                            <div className="product-card" key={image.id}>
                                <img src={image.product}  alt=""/>
                                <div className="product-trapped">
                                    <h5>Title</h5>
                                    <h5>price</h5>
                                </div>
                                
                            </div>       
                    ) }
        )): (<p>You have no products images</p>);

    return (
        <div className="Shop">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xl-4">
                    <div className="side-wrapper">
                        <h5>Electronics</h5>
                        <ul>
                            <li>Tablet</li>
                            <li>Ipad</li>
                            <li>Android Phone</li>
                            <li>Desktop</li>
                            <li>Television</li>
                        </ul>
                    </div>
                    <div className="side-wrapper">
                        <h5>Electronics</h5>
                        <Form.Group>
                            <h5>Price</h5>
                            <Form.Check
                            type="radio"
                            label="$10 - $20"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="radio"
                            label="$10 - $20"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            />
                            <Form.Check
                            type="radio"
                            label="$10 - $20"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            /> 
                        </Form.Group>
                        <Form className="Price-range">                            
                            <h5>Custom Price Range</h5>
                            <div className="price-box">
                                <div className="price-control">
                                    <Form.Control
                                        placeholder="$min"
                                        type="number"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios3"
                                        /> 
                                </div>
                                <div className="price-control">
                                <Form.Control
                                    placeholder="$max"
                                    type="number"
                                    name="formHorizontalRadios"
                                    id="formHorizontal"
                                    /> 
                                </div>
                                <div className="price-control">
                                    <Button variant="primary" type="submit">
                                    GO
                                    </Button> 
                                </div>
                            </div>
                                                              
                        </Form>
                    </div>
                    <div className="side-wrapper">
                        <h5>Brands</h5>
                        <Form.Group>
                                 <Button variant="primary" type="submit">
                                  Search Brand
                                </Button> 
                            <Form.Check
                            type="checkbox"
                            label="Dell"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="checkbox"
                            label="Dell"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />
                            <Form.Check
                            type="checkbox"
                            label="Dell"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            />  
                        </Form.Group>
                    </div>
                </div> 
                <div className="col-lg-8 col-md-8 col-sm-8 col-xl-8">
                    <div className="products">
                        {selectedProduct}                       
                    </div>
                    <div className="paginate">
                        {paginate()}
                    </div>
                </div> 
            </div>
            
        </div>
    )
}

export default Shop
