import React from 'react';
import { Link} from 'react-router-dom';
import Menu from './Menu';
import Form from './Form'

const Navbar = () => {

    return(
        <div className="Main-navigation">
            <ul>
                <li><Menu /></li>
                <li><Link to="/" ><h4>MB</h4></Link></li>
                <li><Form /></li>
                <li><Link to="/ProductSingle">login</Link></li>
                <li><Link to="/Cart">Cart</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;