import React, { Component } from 'react';
import ShoePair from './ShoePair';
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
      return superagent.get('http://localhost:3000/api/user/demo').then(
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
    const { history } = this.state;
    return (
      <div>
        {history ? (
          <div>
            {history.map(entry => {
              if (entry.hauteUrl) {
                return (
                  <ShoePair
                    key={entry.matchupId}
                    hauteUrl={entry.hauteUrl}
                    nauteUrl={entry.nauteUrl}
                  />
                );
              }
            })}
          </div>
        ) : null}
      </div>
    );
  }
}
