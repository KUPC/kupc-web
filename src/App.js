import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => this.makeComponent(Data.contest[0])} />} />
          {Data.contest.map(contest =>
            <Route exact path={`/${contest.suffix}/`} key={contest.suffix} render={() => this.makeComponent(contest)} />
          )}
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
