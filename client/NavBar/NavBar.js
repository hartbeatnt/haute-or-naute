import React, { Component } from 'react';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <span>
          <button> Haute Or Naute </button>
          <button> My Style </button>
        </span>
      </div>
    );
  }
}
