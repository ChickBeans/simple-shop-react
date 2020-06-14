import React from "react";
import Main from "./Main";
import Menu from './Menu';

export default class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "omocha" };
  }

  render() {
    return (
      <div id="global-container">
        <div id="container">
          <Main />
          <Menu />
        </div>
      </div>
    );
  }
}
