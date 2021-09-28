import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { handleInitialData } from '../actions/shared';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Home from './Home';
import Nav from './Nav';

import LogIn from './LogIn';
import '../App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {

    return (
      <Router>
      <Nav />
        <Switch>
          <Route exact path='/' component={LogIn} />
          <Route path='/home' component={Home} />
          <Route path='/add' component={NewQuestion} />
          <Route path='/leaderboard' component={LeaderBoard} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
