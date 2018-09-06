import React, { Component } from 'react';
import './Title.css'

class Title extends Component {
  render() {
    return (
      <header className="Title">
        <h1>
          京都大学プログラミングコンテスト {this.props.suffix}
        </h1>
      </header>
    );
  }
}

export default Title;
