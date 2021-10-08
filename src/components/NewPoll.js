import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { handleCreatePoll } from '../actions/questions';

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
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type='text'
                                name='optionOne'
                                value={optionOne}
                                onChange={this.handleOnChange}
                                placeholder='Enter the 1st option' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Control
                                type='text'
                                name='optionTwo'
                                value={optionTwo}
                                onChange={this.handleOnChange}
                                placeholder='Enter the 2nd option' />
                        </Form.Group>
                        <Button variant="primary" onClick={this.handleOnClick}>Submit</Button>
                    </Form>
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