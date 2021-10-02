import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { handleInitialUserData, handleInitialQuestionData } from '../actions/shared';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import Home from './Home';
import Nav from './Nav';
import PollDetails from './PollDetails';
import LogIn from './LogIn';
import ErrorPage from './ErrorPage';
import '../App.css';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialUserData());
    this.props.dispatch(handleInitialQuestionData());
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
          <Route path='/question/:id' component={PollDetails} />
          <Route path='/ErrorPage' component={ErrorPage} />
        </Switch>
      </Router>
    );
  }
}

export default connect()(App);
