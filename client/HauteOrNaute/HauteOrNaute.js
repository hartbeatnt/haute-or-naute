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
  {
    shoeId: 'third',
    url:
      'https://www.hautelookcdn.com/products/NL1800803/large/8740694.jpg?interpolation=lanczos-none&downsize=434:650&output-quality=90&output-format=jpeg',
  },
  {
    shoeId: 'fourth',
    url:
      'https://www.hautelookcdn.com/resizer/434x650/products/REETA-1/large/8174150.jpg',
  },
  {
    shoeId: 'fifth',
    url:
      'https://www.hautelookcdn.com/products/NL1800803/large/8740694.jpg?interpolation=lanczos-none&downsize=434:650&output-quality=90&output-format=jpeg',
  },
  {
    shoeId: 'sixth',
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
    this.getShoes();
  }

  randomlySelectTwoPairsOfShoes(shoes) {
    const shoesLength = shoes.length;
    const randomIndex = Math.floor(Math.random() * shoesLength);
    const randomShoe = shoes[randomIndex];
    this.state.randomShoes.push(randomShoe);
    shoes.splice(randomIndex, 1);
    if (this.state.randomShoes.length === 1) {
      this.randomlySelectTwoPairsOfShoes(shoes);
    }
    return shoes;
  }

  getShoes() {
    //api call to get images
    const shoes = shoesPlaceholder;
    this.randomlySelectTwoPairsOfShoes(shoes);
    this.setState({ shoes });
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
    const { randomShoes } = this.state;
    console.log(randomShoes);
    return (
      <div>
        {randomShoes.length === 2 ? (
          <div className={style.container}>
            {' '}
            <Shoe
              shoeImageUrl={randomShoes[0].url}
              isLeft
              onClick={this.onClickLeft}
            />{' '}
            <Shoe
              shoeImageUrl={randomShoes[1].url}
              onClick={this.onClickRight}
            />{' '}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

// request= {
//   hauteId,
//   nauteId,
//   userId,
// }
