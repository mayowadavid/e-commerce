import React, {useState} from 'react';
import data from './data';
import Button from 'react-bootstrap/Button';

const Cart = () => {
    const images = data.images[0].picture;
    const [currentValue, setCurrentValue] = useState(0);
    const price = 300;
    const total = price * currentValue;

    const increaseData = ()=>{
        let data = currentValue + 1;
        setCurrentValue(data);
    }

    const decreaseData = ()=>{
        let data = currentValue - 1;
            setCurrentValue(data);
            if(currentValue <= 0){
                setCurrentValue(0);
            }
    }
    return (
        <div className = "cart-page">
                <div className="cart-product">
                    <div className="item-wrap">
                         <h5>ITEM</h5>
                    </div>
                    <div className="price-wrap">
                        <h5>UNIT PRICE</h5>
                    </div>
                    <div className="quantity-wrap">
                         <h5>QUANTITY</h5>
                    </div>
                    <div className="total-wrap">
                         <h5>SUBTOTAL</h5>
                    </div>
                    
                    
                </div>
                <div className="cart-product main-product">
                    <div className="item-wrap line-wrap">
                        <img className="cart-image"src={images} alt=""/>
                            <div className="product-cart">
                                <h5>titletitletitletitletitletitle</h5>
                                <h5>variation</h5>
                                <div className="cart-action">
                                    <h5>favorite</h5>
                                    <h5>remove</h5>
                                </div>
                            </div>
                    </div>
                    <div className="price-wrap line-wrap">
                         <h5>{"$"+price}</h5>
                    </div>
                    <div className="quantity-wrap line-wrap">
                        <div className="button-action">
                            <Button onClick={()=> increaseData()}>+</Button>
                            <input type="number" value={currentValue}></input>
                            <Button onClick={()=> decreaseData()}>-</Button>
                        </div>
                    </div>
                    <div className="total-wrap line-wrap">
                            <h5>{"$"+total}</h5>
                    </div>
                </div> 
        </div>
    )
}

export default Cart
