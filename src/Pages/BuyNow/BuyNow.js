import React from "react";
import photo from '../../appLogo.png'
import "./BuyNow.css";



const BuyNow = () => {
    return(
        <div className="wrapper-outer">
  <div className="checkout_wrapper">
    <div className="product_info">
      <img src={photo} alt="product"/>
      <div className="content">
        <h3>Store City <br/>Products <br/>BuyNow</h3>
      </div>
    </div>
    <div className="checkout_form">
      <p>Payment Section</p>
      <div className="details">
        <div className="section">
          <input type="text" placeholder="Card Number"/>
        </div>
        <div className="section">
          <input type="text" placeholder="Cardholder Name"/>
        </div>
        <div className="section last_section">
          <div class="item">
            <input type="text" placeholder="Expiry Date"/>
          </div>
          <div className="item">
            <input type="text" placeholder="CVV"/>
          </div>
        </div>
        
        <div className="btn">
          <a href="#">Pay</a>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}
export default BuyNow;


