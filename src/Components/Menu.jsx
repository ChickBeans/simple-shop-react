import React, { useState } from "react";

const items = [
  {
    id: 1,
    name: "スポンジボブソファ",
    img: `${process.env.PUBLIC_URL}/images/bob.jpg`,
    description: "この椅子を設置したならば気が狂い眠れないでしょう…",
    price: 9800,
    addCart: "false",
  },
  {
    id: 2,
    name: "チャッキー",
    img: `${process.env.PUBLIC_URL}/images/chucky.jpg`,
    description: "Hi Dee Hoo!呪いの挨拶が聞こえたらオワリ",
    price: 5000,
    addCart: "false",
  },
  {
    id: 3,
    name: "シンバルモンキー",
    img: `${process.env.PUBLIC_URL}/images/crazy-monkey.jpeg`,
    description: "脱獄者発見！脱獄者発見！",
    price: 1500,
    addCart: "false",
  },
  {
    id: 4,
    name: "ゴースト",
    img: `${process.env.PUBLIC_URL}/images/ghost-doll.jpg`,
    description: "これに関しては怖くも可愛くもない！",
    price: 2000,
    addCart: "false",
  },
];

const Menu = () => {
  return (
    <section className="itmes">
      <h3 className="items__theme">商品一覧</h3>
      <div className="item-cards">
        <div className="item-card">
          <p className="item-card__name">{items[0].name}</p>
          <picture className="item-card__img-wrapper">
            <img src={items[0].img} alt="" className="item-card__img" />
          </picture>
          <div className="item-card__body">
            <p className="item-card__description">{items[0].description}</p>
            <div className="item-card__processing-area">
              <div className="item-card__btns">
                <button className="add-product-btn btn" value="+">
                  +
                </button>
                <button className="remove-product-btn btn" value="-">
                  -
                </button>
              </div>
              <p className="item-card__price">￥{items[0].price}</p>
            </div>
          </div>
        </div>
        <div className="item-card">
          <p className="item-card__name">{items[1].name}</p>
          <picture className="item-card__img-wrapper">
            <img src={items[1].img} alt="" className="item-card__img" />
          </picture>
          <div className="item-card__body">
            <p className="item-card__description">{items[1].description}</p>
            <div className="item-card__processing-area">
              <div className="item-card__btns">
                <button className="add-product-btn btn" value="+">
                  +
                </button>
                <button className="remove-product-btn btn" value="-">
                  -
                </button>
              </div>
              <p className="item-card__price">￥{items[1].price}</p>
            </div>
          </div>
        </div>
        <div className="item-card">
          <p className="item-card__name">{items[2].name}</p>
          <picture className="item-card__img-wrapper">
            <img src={items[2].img} alt="" className="item-card__img" />
          </picture>
          <div className="item-card__body">
            <p className="item-card__description">{items[2].description}</p>
            <div className="item-card__processing-area">
              <div className="item-card__btns">
                <button className="add-product-btn btn" value="+">
                  +
                </button>
                <button className="remove-product-btn btn" value="-">
                  -
                </button>
              </div>
              <p className="item-card__price">￥{items[2].price}</p>
            </div>
          </div>
        </div>
        <div className="item-card">
          <p className="item-card__name">{items[3].name}</p>
          <picture className="item-card__img-wrapper">
            <img src={items[3].img} alt="" className="item-card__img" />
          </picture>
          <div className="item-card__body">
            <p className="item-card__description">{items[3].description}</p>
            <div className="item-card__processing-area">
              <div className="item-card__btns">
                <button className="add-product-btn item-card__btn" value="+">
                  +
                </button>
                <button className="remove-product-btn item-card__btn" value="-">
                  -
                </button>
              </div>
              <p className="item-card__price">￥{items[3].price}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
