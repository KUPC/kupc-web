
import React, { Component } from 'react';
import './Menu.css'
import ClassNames from 'classnames';
import Data from './data';
import {Link} from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <ul className="Menu">
        {Data.contest.map(contest =>
          <li key={contest.suffix} className={ClassNames({ selected: contest.suffix === this.props.selectedKey })}>
            <Link to={`/${contest.suffix}/`}>
              {contest.suffix}
            </Link>
          </li>
        )}
      </ul>
    );
  }
}

export default Menu;
