import React, { Component } from 'react';

export default class ShoeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { shoeImageUrl, isLeft, onClick } = this.props;
    return (
      <div
        style={{
          width: '40%',
          margin: isLeft ? '16px 8px 16px 16px' : '16px 16px 16px 8px',
        }}
      >
        <img
          style={{
            width: '100%',
            display: 'flex',
            margin: 'auto',
          }}
          onClick={onClick}
          src={shoeImageUrl}
        />
      </div>
    );
  }
}
