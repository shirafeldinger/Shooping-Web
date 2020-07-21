import React, { Component } from "react";
import "./Cart.css";
export default class Cart extends Component {
  state = {
    message: "",
    flag: true,
  };

  accumalteItems = (items) => {
    let objectItems = items.reduce((acc, item) => {
      acc[item.name] = acc[item.name] ? acc[item.name] : item;
      if (acc[item.name].count) {
        acc[item.name].count++;
      } else {
        acc[item.name].count = 1;
      }
      return acc;
    }, {});
    return Object.values(objectItems);
  };

  render() {
    const { items } = this.props;

    return (
      <div>
        {this.accumalteItems(items).map((cartItem, index) => {
          return (
            <div key={index} className="Cart">
              <img className="cart-img" src={cartItem.picture} alt="" />
              <h2>{cartItem.name} </h2>
              <h3>₪{cartItem.price}</h3>
              <h3>Count {cartItem.count}</h3>
            </div>
          );
        })}
        {this.state.flag && (
          <p>
            Subtotal ₪
            {this.props.items.reduce((total, item) => {
              return total + item.price;
            }, 0)}
          </p>
        )}
        <p>{this.state.message}</p>

        <button
          id="buy"
          onClick={() => {
            this.props.emptyBuyItems();
            this.setState({ message: "You bought your items!", flag: false });
          }}
        >
          Buy
        </button>
      </div>
    );
  }
}
