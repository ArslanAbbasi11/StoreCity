import React, { useEffect,useState } from "react";
import axios from "axios";
import "./Details.css";
import { useParams } from "react-router-dom";


const Details = () => {
  const { id } = useParams();

  const [product,setProduct] = useState({})

  const fetchProductDetail = async (id) => {
    const {data} = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });

      if(data){
          setProduct(data)
      }
  };

  console.log(product)

  useEffect(() => {
    fetchProductDetail(id)
      }, [])

  return (
    <div className="container">
      
    <div className="main">
    <h1>PRODUCT DETAIL</h1>
    <div className="product-detail">
      <div className="product-wrap">
        <div className="product-image">
          <img src={product.image}></img>
        </div>
        </div>
        <div className="info">
        <div className="product-name">
          <h2>{product.title}</h2>
        </div>
        <div className="product-price">
          <h2>${product.price}</h2>
        </div>
        <div className="product-category">
          <h2>{product.category}</h2>
        </div>
        <div className="product-discription">
          <h2>{product.description}</h2>
        </div>
        <div className="btn-wrap">
      <div className="quantity-btn">
      <select>
  <option value="0">1</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  <option value="11">11</option>
  <option value="12">12</option>
</select>
      </div>
      <div className="add-btn">
      <button class="button"><span>Add TO Cart</span></button>
      </div>
      </div>
      <div className="buy-btn">
      <button class="button"><span>BUY NOW</span></button>
      </div>
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default Details;