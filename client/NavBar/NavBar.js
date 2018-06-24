import React, { Component } from 'react';
import style from './NavBar.css';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={style.container}>
        <span>
          <span className={style.buttons}> Play </span>
          <span className={style.buttons}> What's Haute </span>
        </span>
      </div>
    );
  }
}
