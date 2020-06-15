import React from "react";
import Menu from "./Menu";
const Cart = (props) => {
  return (
    <div className="cart">
      {/* <img src= alt=""/> */}
      <p className="cart-menu-num">{Menu.props}</p>
      {alert('Menu.count: ', Menu.count)}
    </div>
  );
};

export default Cart;
