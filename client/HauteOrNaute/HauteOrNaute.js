import React, { Component } from 'react';
import Shoe from '../ShoeComponent/ShoeComponent';
import style from './HauteOrNaute.css';

const shoesPlaceholder = [
  {
    shoeId: 'first',
    url:
      'https://www.hautelookcdn.com/products/NL1800803/large/8740694.jpg?interpolation=lanczos-none&downsize=434:650&output-quality=90&output-format=jpeg',
  },
  {
    shoeId: 'second',
    url:
      'https://www.hautelookcdn.com/resizer/434x650/products/REETA-1/large/8174150.jpg',
  },
];

export default class HauteOrNaute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      randomShoes: [],
      haute: '',
      naute: '',
    };
    this.randomlySelectTwoPairsOfShoes = this.randomlySelectTwoPairsOfShoes.bind(
      this,
    );
    this.getShoes = this.getShoes.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  componentDidMount() {
    //api call to get images
    this.getShoes();
  }

  randomlySelectTwoPairsOfShoes() {
    return shoesPlaceholder;
  }

  getShoes() {
    const randomShoes = this.randomlySelectTwoPairsOfShoes();
    this.setState({ shoes: shoesPlaceholder, randomShoes });
  }

  onClickLeft(event) {
    event.preventDefault();
    console.log(event.target.src);
    const { randomShoes } = this.state;
    console.log(randomShoes, 'hnshoes');
    // const haute = randomShoes[0];
    // const naute = randomShoes[1];
  }

  onClickRight(event) {
    event.preventDefault();
    console.log(event.target.src);
    const { randomShoes } = this.state;
    // const haute = randomShoes[1];
    // const naute = randomShoes[0];
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
            onClick={this.onClickLeft}
          />{' '}
          <Shoe
            shoeImageUrl={
              'https://www.hautelookcdn.com/resizer/434x650/products/REETA-1/large/8174150.jpg'
            }
            onClick={this.onClickRight}
          />{' '}
        </div>
      </div>
    );
  }
}

// request= {
//   hauteId,
//   nauteId,
//   userId,
// }
