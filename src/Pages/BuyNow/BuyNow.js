import React from "react";
import photo from "../../appLogo.png";
import "./BuyNow.css";

const BuyNow = () => {
  return (
    <div className="wrapper-outer">
      <div className="checkout_wrapper">
        <div className="product_info">
          <img src={photo} alt="product" />
          <div className="content">
          <div class="Buy-Product">
      <h4>Buy Products</h4>
      <p>Product  <span class="price">$15</span></p>
      <p>Product  <span class="price">$5</span></p>
      <p>Product  <span class="price">$8</span></p>
      <p>Product <span class="price">$2</span></p>
      <br/><br/>  <br/><br/>
      <hr/>
      
      <p>Total <span class="price"><b>$30</b></span></p>
    </div>
          </div>
        </div>
        <div className="checkout_form">
          <p>Payment Section</p>
          <div className="details">
            <div className="section">
              <input type="text" placeholder="Card Number" />
            </div>
            <div className="section">
              <input type="text" placeholder="Cardholder Name" />
            </div>
            <div className="section last_section">
              <div class="item">
                <input type="text" placeholder="Expiry Date" />
              </div>
              <div className="item">
                <input type="text" placeholder="CVV" />
              </div>
            </div>

            <div className="btn">
              <a href="#">Pay</a>
            </div>
          </div>
        </div>
        <div className="bill"></div>
      </div>
    </div>
  );
};
export default BuyNow;
