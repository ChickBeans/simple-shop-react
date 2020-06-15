import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Menu from "./Menu";
import GlobalNav from "./GlobalNav";
import Contact from "./Contact";
import Cart from "./Cart";

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const listItem = [
      {
        id: 1,
        name: "スポンジボブソファ",
        img: `${process.env.PUBLIC_URL}/images/bob.jpg`,
        description: "この椅子を設置したならば気が狂い眠れないでしょう…",
        price: 9800,
        cartCount: 0,
      },
      {
        id: 2,
        name: "チャッキー",
        img: `${process.env.PUBLIC_URL}/images/chucky.jpg`,
        description: "Hi Dee Hoo!呪いの挨拶が聞こえたらオワリ",
        price: 5000,
        cartCount: 0,
      },
      {
        id: 3,
        name: "シンバルモンキー",
        img: `${process.env.PUBLIC_URL}/images/crazy-monkey.jpeg`,
        description: "脱獄者発見！脱獄者発見！",
        price: 1500,
        cartCount: 0,
      },
      {
        id: 4,
        name: "ゴースト",
        img: `${process.env.PUBLIC_URL}/images/ghost-doll.jpg`,
        description: "これに関しては怖くも可愛くもない！",
        price: 2000,
        cartCount: 0,
      },
      {
        id: 5,
        name: "ノンストレスボール",
        img: `${process.env.PUBLIC_URL}/images/non-stress-ball.jpg`,
        description: "握って爆発させてストレス発散！日本人怖い",
        price: 980,
        cartCount: 0,
      },
      {
        id: 6,
        name: "ピカチュウ？",
        img: `${process.env.PUBLIC_URL}/images/pokemon.jpg`,
        description: "超大国が産み出した恐ろしすぎるクリーチャー！お面です。",
        price: 1480,
        cartCount: 0,
      },
      {
        id: 7,
        name: "貞子(洋物)",
        img: `${process.env.PUBLIC_URL}/images/sadako-doll.jpeg`,
        description: "あの貞子がいつの間にか海外進出！？",
        price: 1480,
        cartCount: 0,
      },
      {
        id: 8,
        name: "ゴースト",
        img: `${process.env.PUBLIC_URL}/images/skelton-logo.jpg`,
        description:
          "強力な酸を浴びて半身だけ透明になったレゴ。珍しさからお値段は少しお高め。",
        price: 1000,
        cartCount: 0,
      },
      {
        id: 9,
        name: "thomas",
        img: `${process.env.PUBLIC_URL}/images/thomas.jpg`,
        description: "子どもと大人で評価が分かれるおもちゃNo１！顔が怖い。",
        price: 480,
        cartCount: 0,
      },
      {
        id: 10,
        name: "双子目玉",
        img: `${process.env.PUBLIC_URL}/images/twins-toy.jpg`,
        description: "目玉をコロコロ転がすだけのおもちゃ。",
        price: 100,
        cartCount: 0,
      },
      {
        id: 11,
        name: "Cuboro-知育玩具-",
        img: `${process.env.PUBLIC_URL}/images/cuboro.jpg`,
        description: "この木材が７万！？７万！？",
        price: 70000,
        cartCount: 0,
      },
      {
        id: 12,
        name: "日本人形",
        img: `${process.env.PUBLIC_URL}/images/japanese-doll.jpg`,
        description: "伝統的な日本人形。",
        price: 12000,
        cartCount: 0,
      },
    ];

    return (
      <div id="global-container">
        <Header />
        <div id="container">
          <Main />
          <section className="itmes">
            <h3 className="items__theme">商品一覧</h3>
            <div className="item-cards">
              {listItem.map((item) => {
                return (
                  <Menu
                    id={item.id}
                    name={item.name}
                    img={item.img}
                    description={item.description}
                    price={item.price}
                  />
                );
              })}
            </div>
          </section>
          <Contact />
        </div>
        {/* <GlobalNav /> */}
      </div>
    );
  }
}
