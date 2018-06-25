import React, { Component } from 'react';

export default class ShoePair extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { hauteUrl, nauteUrl } = this.props;
    return (
      <span>
        <div>
          <span>
            Haute
            <img style={{ width: '30%' }} src={hauteUrl} />
          </span>
          <span>
            Naute
            <img style={{ width: '30%' }} src={nauteUrl} />
          </span>
        </div>
      </span>
    );
  }
}
