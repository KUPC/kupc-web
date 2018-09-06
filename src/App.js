import React, { Component } from 'react';
import { HashRouter, Redirect, Switch, Route } from 'react-router-dom'
import Data from './data';
import NotFound from './NotFound';
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
          <Route path='*' render={() => this.makeComponent(Data.contest[0])} />} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
