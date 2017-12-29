import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import HomeContainer from './HomeContainer'

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route  exact path='/' component={HomeContainer}/>
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
