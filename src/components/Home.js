import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PollsAnswered from './PollsAnswered';
import PollsUnAnswered from './PollsUnAnswered';

class Home extends Component {

    state = {
        view: 0,
        text: 'View Answered Questions'
    }
    handleOnClick =  (e) => {
        e.preventDefault();
        if(this.state.view === 0) {
            this.setState({ view: 1})
        }
        else {
            this.setState({ view: 0})
        }
        if(this.state.text === 'View Answered Questions') {
            this.setState({ text: 'View UnAnswered Questions'})
        }
        else {
            this.setState({ text: 'View Answered Questions'})
        }
    };

    render() {
        const { authedUser } = this.props;
        console.log(`authed user ${authedUser}`);
        if(authedUser && Object.keys(authedUser).length > 0)
        {
            return (
                <div>
                    <h1>Home Page</h1>
                    {
                        this.state.view === 0 ?
                        <div>
                            <button onClick={ this.handleOnClick }>{ this.state.text }</button>
                            <PollsUnAnswered />
                        </div>:
                        <div>
                            <button onClick={ this.handleOnClick }>{ this.state.text }</button>
                            <PollsAnswered />
                        </div>
                    }
                </div>
            );
        }
        else {
            alert('you need to be logged in to view the home page');
            return (
                <Redirect to='/' />
            );
        }
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(Home);