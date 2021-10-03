import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { handleCreatePoll } from '../actions/questions';
import { createdPoll } from '../actions/users';

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
    };

    handleOnClick = (e) => {
        e.preventDefault();
        const { dispatch, authedUser } = this.props;
        const { optionOne, optionTwo } = this.state;

        dispatch(handleCreatePoll({
            author: authedUser.id,
            optionOneText: optionOne,
            optionTwoText: optionTwo,
        }))

        this.props.history.push('/home');
    };

    handleOnChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(() => {
            return {
                [name]:value,
            }
        });
    };

    render() {
        const { authedUser } = this.props;
        const {optionOne, optionTwo } = this.state;

        if(authedUser && Object.keys(authedUser).length > 0)
        {
            return (
                <div>
                    <h1>Would You Rather</h1>
                    <form>
                        <input
                            type='text'
                            name='optionOne'
                            value={optionOne}
                            onChange={this.handleOnChange}
                            placeholder='Enter the 1st option'></input>
                            <br />
                        <input
                            type='text'
                            name='optionTwo'
                            value={optionTwo}
                            onChange={this.handleOnChange}
                            placeholder='Enter the 2nd option'></input>
                            <br />
                        <button onClick={this.handleOnClick}>Submit</button>
                    </form>
                </div>
            );
        }
        else {
            alert('you need to be logged in to post a new question');
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

export default connect(mapStateToProps)(NewQuestion);