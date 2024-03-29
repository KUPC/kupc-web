import React, { Component } from 'react';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom'
import Data from './data';
import './App.css';

class App extends Component {
  makeComponent(data) {
    return React.createElement(data.component, { data: data });
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          {Data.contest.map(contest =>
            <Route exact path={`/${contest.suffix}`} key={contest.suffix} render={() => this.makeComponent(contest)} />
          )}
          <Route path='*' render={() => <Redirect to={`/${Data.contest[0].suffix}/`} />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
