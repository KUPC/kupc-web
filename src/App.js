import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'
import Data from './data';
import NotFound from './NotFound';
import ContestInfo from './ContestInfo';
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
            <Route path={`/${contest.suffix}/`} key={contest.suffix} render={() => this.makeComponent(contest)} />
          )}
          <Route path='/' render={() => this.makeComponent(Data.contest[0])} />} />
          <Route path='*' component={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
