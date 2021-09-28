import React, { Component } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeAuthedUser } from '../actions/authUser';



class Nav extends Component {

    handleLogOut = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(removeAuthedUser());
        this.props.history.push('/');
    }

    render() {
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            LogIn
                        </NavLink>
                    </li>
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
                        <button onClick={this.handleLogOut}>LogOut</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(connect()(Nav));