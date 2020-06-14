import React, { useState } from "react";

const items = {
  id: 1,
  name: "hand",
  img: `${process.env.PUBLIC_URL}/images/site-image.jpg`,
  description: "不気味な手です",
  price: 1000,
  addCart: "false",
};

const Menu = () => {
  return (
    <div className="item-cards">
      <div className="item-card">
        <p className="item-card__name">{items.name}</p>
        <picture className="item-card__img-wrapper">
          <img src={items.img} alt="" className="item-card__img" />
        </picture>
        <div className="item-card__body">
          <p className="item-card__description">{items.description}</p>
          <div className="item-card__processing-area">
            <div className="item-card__btns">
              <button className="add-product-btn btn" value="+">
                +
              </button>
              <button className="remove-product-btn btn" value="-">
                -
              </button>
            </div>
            <p className="item-card__price">￥{items.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
