import React from 'react';
import svg from './svg';

const QualityControl = () => {
    const  svgs = svg.svg;
    return (
        <div className="quality-control">
                <div className="quality-badge">
                  <img src={svgs[0].picture} alt=""/>
                  <div className="order">
                    <h5>FREE SHIPPING</h5>
                    <h5>Order above $200</h5>
                  </div>
                </div>
                <div className="quality-badge">
                  <img src={svgs[1].picture} alt=""/>
                  <div className="order">
                    <h5>24/7 SUPPORT</h5>
                    <h5>Online and phone support 24/7</h5>
                  </div>
                </div>
                <div className="quality-badge">
                  <img src={svgs[2].picture} alt=""/>
                  <div className="order">
                    <h5>30 DAYS RETURN POLICY</h5>
                    <h5>30 days money back guaranteed</h5>
                  </div>
                </div>
        </div>
    )
}

export default QualityControl
