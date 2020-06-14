import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header--left">
          <p className="header__site-title">Crazy Toys Village</p>
        </div>
        <div className="header--right">
          <nav className="header__nav">
              <ul className="header__nav-list">
                  <li className="header__nav-item"><a href="#">Message</a></li>
                  <li className="header__nav-item"><a href="#">Products</a></li>
                  <li className="header__nav-item"><a href="#">Hoge</a></li>
              </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
