import React, { useState } from "react";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isModalOpen: false,
    };
  }

  addCart() {
    this.setState({ count: this.state.count + 1 });
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }
  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className="modal">
          <div className="modal__inner">
            <picture className="modal__img-wrapper">
              <img src={this.props.img} alt="" className="modal__img" />
            </picture>
            <h2 className="modal__name">{this.props.name}</h2>
            <p className="modal__description">{this.props.description}</p>
            <p className="moda__price">￥{this.props.price}</p>
            <button
              className="modal__close-btn"
              onClick={() => {this.closeModal()}}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }

    return (
      <div className="item-card">
        <p className="item-card__name">{this.props.name}</p>
        <picture
          className="item-card__img-wrapper"
          onClick={() => {
            this.openModal();
          }}
        >
          <img src={this.props.img} alt="" className="item-card__img" />
        </picture>
        <div className="item-card__body">
          <div className="item-card__processing-area">
            <span
              className="item-card__cart"
              id="cart"
              onClick={() => {
                this.addCart();
              }}
            >Add</span>
            <p className="item-card__cart-count">{this.state.count}</p>
            <p className="item-card__price" id="cart">
              ￥{this.props.price}
            </p>
          </div>
        </div>
        {modal}
      </div>
    );
  }
}
