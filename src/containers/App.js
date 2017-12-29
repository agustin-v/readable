import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import HomeContainer from './HomeContainer'
import CategoryContainer from './CatergoryContainer'
import PostContainer from './PostContainer'
import EditContainer from './EditContainer'
import NotFoundContainer from './NotFoundContainer'

class App extends Component {
  render() {
    return (
      <main>
        <Switch>
            <Route  exact path='/' component={HomeContainer}/>
            <Route  exact path='/category' component={CategoryContainer}/>
            <Route  exact path='/post' component={PostContainer}/>
            <Route  exact path='/edit' component={EditContainer}/>

            <Route  exact path='/*' component={NotFoundContainer}/>
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
