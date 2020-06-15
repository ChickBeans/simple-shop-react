import React, { useState, useEffect } from "react";

const Menu = (props) => {
  // カート追加のcoutUp
  const [count, counter] = useState(0);
  // モーダルのオンオフ切り替え用
  const [modalView, modalChange] = useState(false);

  const openModal = () => {
    modalChange(true);
  };
  const closeModal = () => {
    modalChange(false);
  };

  const countUp = () => {
    counter(count + 1);
  };

  let modal;
  if (modalView === true) {
    modal = (
      <div className="modal">
        <div className="modal__inner">
          <picture className="modal__img-wrapper">
            <img src={props.img} alt="" className="modal__img" />
          </picture>
          <h2 className="modal__name">{props.name}</h2>
          <p className="modal__description">{props.description}</p>
          <p className="moda__price">￥{props.price}</p>
          <button
            className="modal__close-btn"
            onClick={() => {
              closeModal();
            }}
          >
            とじる
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="item-card">
      <p className="item-card__name">{props.name}</p>
      <picture className="item-card__img-wrapper">
        <img
          src={props.img}
          alt=""
          className="item-card__img"
          onClick={() => {
            openModal();
          }}
        />
      </picture>
      <div className="item-card__body">
        <div className="item-card__processing-area">
          <span
            className="item-card__cart"
            id="cart"
            onClick={() => {
              countUp();
            }}
          >
            Add
          </span>
          <p className="item-card__cart-count">{count}</p>
          <p className="item-card__price" id="cart">
            ￥{props.price}
          </p>
        </div>
      </div>
      {modal}
    </div>
  );
};

export default Menu;
