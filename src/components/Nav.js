import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeAuthedUser } from '../actions/authUser';



class Nav extends Component {

    user = 'Anonymous';

    handleLogOut = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(removeAuthedUser());
        this.user = 'Anonymous';
        this.props.history.push('/');
    }

    render() {

        const { authedUser } = this.props;

        if(authedUser && Object.keys(authedUser).length > 0) {
            this.user = authedUser.name;
        }

        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/home' activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    <li>
                        {this.user}
                    </li>
                    <li hidden={ Object.keys(authedUser).length < 1 ? true: false}>
                        <button onClick={this.handleLogOut}>LogOut</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

function mapStateToProps({ authedUser }) {
    return {
        authedUser,
    }
}

export default withRouter(connect(mapStateToProps)(Nav));