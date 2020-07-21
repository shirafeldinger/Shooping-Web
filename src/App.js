import React, { Component } from "react";
import "./App.css";
import Cart from "./Components/Cart.js";
import Product from "./Components/Product.js";

export default class App extends Component {
  state = {
    productsList: [
      {
        name: "Tomatos",
        picture:
          "https://cdn1-www-wholesomebabyfood.momtastic.com/assets/uploads/2015/04/tomato.jpg",
        price: 3,
      },
      {
        name: "Cucumbers",
        picture:
          "https://www.permaculturenews.org/wp-content/uploads/2017/04/cucumber-feat.jpg",
        price: 4,
      },
      {
        name: "Peppers",
        picture:
          "https://i5.walmartimages.ca/images/Enlarge/284/684/6000191284684.jpg",
        price: 6,
      },
    ],
    cartItems: [],
    boughtItems: [],
    flag: false,
  };

  handleAddToCart = (productToAdd) => {
    this.setState({
      cartItems: [{ ...productToAdd }, ...this.state.cartItems],
    });
  };

  buyCart = () => {
    this.setState({
      cartItems: [],
      boughtItems: this.state.cartItems,
    });
  };

  show = () => {
    if (this.state.flag) {
      return (
        <div id="cart-page">
          <img
            id="cart-img"
            src="https://img.icons8.com/plasticine/100/000000/favorite-cart.png"
            alt="cart"
          />
          <div id="Cart-div">
            {" "}
            <h1 id="cart-headline"> Cart </h1>
            <Cart items={this.state.cartItems} emptyBuyItems={this.buyCart} />
            <button
              id="move-home"
              onClick={() => {
                this.setState({ flag: false });
              }}
            >
              Back to Homepage
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div id="homepage">
          {" "}
          <img
            id="welcome-img"
            src="https://img.icons8.com/cute-clipart/64/000000/shop.png"
            alt="welcome"
          />
          <div>
            <h1 id="headline">Welcome to Shira's shop! </h1>

            <h2 id="second-headline">List of Products:</h2>

            {this.state.productsList.map((product, index) => {
              return (
                <Product
                  onAddToCart={this.handleAddToCart}
                  key={index}
                  product={product}
                />
              );
            })}
            <div id="button">
              <button
                id="move-cart"
                onClick={() => {
                  this.setState({ flag: true });
                }}
              >
                Move to Cart
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div className="App">{this.show()}</div>;
  }
}
