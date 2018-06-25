import React, { Component } from 'react';

export default class Fire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { showFire, isHaute } = this.props;
    return (
      <span>
        {isHaute ? (
          <img
            style={{ width: '80%', height: 'auto', margin: 'auto' }}
            src={
              'https://clipart.info/images/ccovers/1495818555cartoon-fire-flames-emoji-png-transparent.png'
            }
          />
        ) : null}
      </span>
    );
  }
}
