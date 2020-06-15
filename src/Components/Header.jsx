import React from "react";

const Header = () => {

  const toggleClass = (tClass) => {
    document.getElementById('mobile-menu__btn').classList.toggle(tClass);
  }

  let headerNav;
  headerNav = (
    <nav className="header__nav">
    <ul className="header__nav-list">
        <li className="header__nav-item"><a href="#">Message</a></li>
        <li className="header__nav-item"><a href="#">Products</a></li>
        <li className="header__nav-item"><a href="#">Contact</a></li>
        <li className="header__nav-item"><a href="#">Cart</a></li>
    </ul>
</nav>
  )
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header--left">
          <img className="header__site-title" src={`${process.env.PUBLIC_URL}/images/site-logo.png`}></img>
        </div>
        <div className="header--right">
          <div 
          className="mobile-btn"
          id="mobile-menu__btn"
          onClick={() => toggleClass('menu-open')}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
