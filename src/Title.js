import React, { Component } from 'react';
import './Title.css'

class Title extends Component {
  render() {
    return (
      <header className="Title">
        京都大学プログラミングコンテスト {this.props.suffix}
      </header>
    );
  }
}

export default Title;
