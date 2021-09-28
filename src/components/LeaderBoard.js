import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LeaderBoard extends Component {

    render() {

        const { authedUser } = this.props;
        if(authedUser && Object.keys(authedUser).length > 0) {
            return (
                <div>
                    <h1>Leader Board</h1>
                </div>
            );
        }
        else {
            alert('you need to be logged in to view the leaderboard');
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
export default connect(mapStateToProps)(LeaderBoard);