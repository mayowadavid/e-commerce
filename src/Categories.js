import React from 'react';
import {Link} from 'react-router-dom';
import data from './data';


const Category = () => {
    const firstData = data.images;
    const newData = firstData.slice(0, 12);
    
    const categoriesList = newData.length ? (
        newData.map(image => {
            return (
                    <div className="category-holder" key={image.id}>
                        <div className="holder" >
                             <Link to="/"><img src={image.icon}  alt=""/></Link>
                             <h5>text</h5>
                        </div>
                    </div>
            )     
        }
        )): (<p>You have no product categories</p>);
        
    return (
            <div className="categories-tag" >
                <button>Category</button>
                <div className="categories-container">
                            {categoriesList}
                </div>
            </div>
    )
}

export default Category;
