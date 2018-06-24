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
        <div style={{ display: 'flex' }}>
          {' '}
          <Shoe
            shoeImageUrl={
              'https://www.hautelookcdn.com/products/NL1800803/large/8740694.jpg?interpolation=lanczos-none&downsize=434:650&output-quality=90&output-format=jpeg'
            }
          />{' '}
          <Shoe
            shoeImageUrl={
              'https://www.hautelookcdn.com/resizer/434x650/products/REETA-1/large/8174150.jpg'
            }
          />{' '}
        </div>
      </div>
    );
  }
}
