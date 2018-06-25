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
    this.submitHauteOrNaute = this.submitHauteOrNaute.bind(this);
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
    //api call to get shoes
    try {
      return superagent.get('http://localhost:3000/shoes').then(
        res => {
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
    try {
      const shoes = await this.getShoes();
      if (this.state.randomShoes.length === 2) {
        this.setState({ randomShoes: [], haute: '' });
      }
      this.randomlySelectTwoPairsOfShoes(shoes);
      this.setState({ shoes });
    } catch (err) {
      throw err;
    }
  }

  async submitHauteOrNaute(hauteId, nauteId, userId) {
    try {
      return superagent
        .post('http://localhost:3000/matchups')
        .send({ hauteId, nauteId, userId })
        .then(
          res => {
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

  onClickLeft(event) {
    event.preventDefault();
    const { randomShoes } = this.state;
    this.setState({ haute: 'left' });
    this.submitHauteOrNaute(
      randomShoes[0].shoeId,
      randomShoes[1].shoeId,
      'demo',
    );
    setTimeout(() => this.getShoesAndMatchUp(), 1000);
  }

  onClickRight(event) {
    event.preventDefault();
    const { randomShoes } = this.state;
    this.setState({ haute: 'right' });
    this.submitHauteOrNaute(
      randomShoes[1].shoeId,
      randomShoes[0].shoeId,
      'demo',
    );
    setTimeout(() => this.getShoesAndMatchUp(), 500);
  }

  render() {
    const { randomShoes, haute } = this.state;
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
