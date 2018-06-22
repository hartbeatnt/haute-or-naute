import React, { Component } from 'react';
import Shoe from '../ShoeComponent/ShoeComponent';

export default class HauteOrNaute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        Haute or Not?
        <span>
          {' '}
          <Shoe /> <Shoe />{' '}
        </span>
      </div>
    );
  }
}
