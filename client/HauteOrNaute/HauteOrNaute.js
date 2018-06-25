import React, { Component } from 'react';
import Shoe from '../ShoeComponent/ShoeComponent';
import style from './HauteOrNaute.css';
import superagent from 'superagent';

export default class HauteOrNaute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [],
      randomShoes: [],
      haute: '',
    };
    this.randomlySelectTwoPairsOfShoes = this.randomlySelectTwoPairsOfShoes.bind(
      this,
    );
    this.getShoes = this.getShoes.bind(this);
    this.getShoesAndMatchUp = this.getShoesAndMatchUp.bind(this);
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
  }

  componentDidMount() {
    this.getShoesAndMatchUp();
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

  async getShoes() {
    try {
      return superagent.get('http://localhost:3000/shoes').then(
        res => {
          console.log(res, 'res');
          return res.body;
        },
        err => {
          throw err;
        },
      );
    } catch (err) {
      throw err;
    }
  }

  async getShoesAndMatchUp() {
    //api call to get images
    try {
      const shoes = await this.getShoes();
      console.log(shoes, 'shoes');
      this.randomlySelectTwoPairsOfShoes(shoes);
      this.setState({ shoes });
    } catch (err) {
      throw err;
    }
  }

  onClickLeft(event) {
    event.preventDefault();
    console.log(event.target.src);
    const { randomShoes } = this.state;
    console.log(randomShoes, 'hnshoes');
    this.setState({ haute: 'left' });
  }

  onClickRight(event) {
    event.preventDefault();
    console.log(event.target.src);
    const { randomShoes } = this.state;
    this.setState({ haute: 'right' });
  }

  render() {
    const { randomShoes, haute } = this.state;
    console.log(haute, 'haute');
    return (
      <div>
        {randomShoes.length === 2 ? (
          <div className={style.container}>
            {' '}
            <Shoe
              shoeImageUrl={randomShoes[0].url}
              isLeft
              onClick={this.onClickLeft}
              isHaute={haute === 'left'}
            />{' '}
            <Shoe
              shoeImageUrl={randomShoes[1].url}
              onClick={this.onClickRight}
              isHaute={haute === 'right'}
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
