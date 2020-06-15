import React from "react";

const GlobalNav = () => {
  return (
    <nav className="global__nav">
      <ul className="global__nav-list">
        <li className="global__nav-item">
          <a href="#">Message</a>
        </li>
        <li className="global__nav-item">
          <a href="#">Products</a>
        </li>
        <li className="global__nav-item">
          <a href="#">Contact</a>
        </li>
        <li className="global__nav-item">
          <a href="#">Cart</a>
        </li>
      </ul>
    </nav>
  );
};

export default GlobalNav;