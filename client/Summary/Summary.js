import React, { Component } from 'react';
import superagent from 'superagent';

export default class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getHistory = this.getHistory.bind(this);
    this.getHauteOrNotSelections = this.getHauteOrNotSelections.bind(this);
  }

  componentDidMount() {
    this.getHauteOrNotSelections();
  }

  async getHistory() {
    try {
      return superagent.get('http://localhost:3000/user/demo').then(
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

  async getHauteOrNotSelections() {
    const history = await this.getHistory();
    this.setState({ history });
  }

  render() {
    return <div />;
  }
}