import React, { Component } from 'react';
import Fire from './Fire';

export default class ShoeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { shoeImageUrl, isLeft, onClick, isHaute } = this.props;
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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Fire isHaute={isHaute} />
          <Fire isHaute={isHaute} />
          <Fire isHaute={isHaute} />
        </div>
      </div>
    );
  }
}
