import React, { Component } from 'react';

export default class ShoeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { shoeImageUrl } = this.props;
    return (
      <div style={{ width: '50%', display: 'flex', column: 'false' }}>
        <img src={shoeImageUrl} />
      </div>
    );
  }
}
