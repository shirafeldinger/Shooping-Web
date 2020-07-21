import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  render() {
    const { name, price, picture } = this.props.product;

    return (
      <div className="Product">
        <h2>{name}</h2>
        <img className="images" src={picture} alt="" />
        <h3 className="Price">₪{price}</h3>
        <button
          className="product-button"
          onClick={() => {
            this.props.onAddToCart(this.props.product);
          }}
        >
          Add to Cart
        </button>
      </div>
    );
  }
}
