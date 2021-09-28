import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Home extends Component {

    render() {
        const { authedUser } = this.props;
        console.log(`authed user ${authedUser}`);
        if(authedUser && Object.keys(authedUser).length > 0)
        {
            return (
                <div>
                    <h1>Home Page</h1>
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