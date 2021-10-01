import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PollResults extends Component {

    render() {
        const { authedUser } = this.props;
        if(authedUser && Object.keys(authedUser).length > 0)
        {
            return (
                <div>
                    new question
                </div>
            );
        }
        else {
            alert('you need to be logged in to see poll results');
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

export default connect(mapStateToProps)(PollResults);