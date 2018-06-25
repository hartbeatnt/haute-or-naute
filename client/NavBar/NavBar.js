import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
          <span className={style.buttons}> 
            <Link to="/"> Play </Link>
          </span>
          <span className={style.buttons}> 
            <Link to="/history"> What's Haute </Link>
          </span>
        </span>
      </div>
    );
  }
}
