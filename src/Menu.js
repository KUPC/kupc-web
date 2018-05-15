
import React, { Component } from 'react';
import './Menu.css'
import ClassNames from 'classnames';
import Data from './data';

class Menu extends Component {
  render() {
    return (
      <ul className="Menu">
        {Data.contest.map(contest =>
          <li key={contest.suffix} className={ClassNames({ selected: contest.suffix === this.props.selectedKey })}>
            <a href={`/${contest.suffix}/`}>
              {contest.suffix}
            </a>
          </li>
        )}
      </ul>
    );
  }
}

export default Menu;
