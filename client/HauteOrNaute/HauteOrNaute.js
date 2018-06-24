import React, { Component } from 'react';
import Shoe from '../ShoeComponent/ShoeComponent';
import style from './HauteOrNaute.css';

export default class HauteOrNaute extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className={style.container}>
          {' '}
          <Shoe
            shoeImageUrl={
              'https://www.hautelookcdn.com/products/NL1800803/large/8740694.jpg?interpolation=lanczos-none&downsize=434:650&output-quality=90&output-format=jpeg'
            }
            isLeft
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
