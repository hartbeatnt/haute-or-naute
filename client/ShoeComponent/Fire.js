import React, { Component } from 'react';

export default class Fire extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { showFire, isHaute } = this.props;
    console.log(isHaute, 'isHaute');
    return (
      <span>
        {isHaute ? (
          <img
            style={{ width: '50px', height: 'auto' }}
            src={
              'https://clipart.info/images/ccovers/1495818555cartoon-fire-flames-emoji-png-transparent.png'
            }
          />
        ) : null}
      </span>
    );
  }
}
