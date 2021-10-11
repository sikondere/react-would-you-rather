import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { handleSavePoll } from '../actions/questions';
import { answerPoll } from '../actions/users';

class PollDetails extends Component {

    state = {
        option:''
    }

    /**
     * @description function to handle when a user clicks a radio button
     * @param {event} e -the observed event
     * @listens event
     */
    handleOnClick = (e) => {
        this.setState({
            option: e.target.id,
        })
    };

    /**
     * @description function to handle saves an anser to a question
     * @param {event} e -the observed event
     * @listens event
     */
    handleSubmit = (e) => {
        e.preventDefault()
        const answer = this.state.option;
        const { dispatch, id, authedUser } = this.props;

        let response = {
            qid: id,
            answer,
            authedUser: authedUser.id,
        }
        dispatch(handleSavePoll(response));
        dispatch(answerPoll(response));
    }

    /**
     * @description  renders the details page that either shows a summary of a poll
     * or a form for a user to submit an answer to a poll
     * @returns an html element
     */
    render() {

        const { authedUser, userAvatar, userName, answeredPoll, userChoice,
            questionOption1, questionOption2, option1AnswerCount, option2AnswerCount } = this.props;

        const votesOption1 = `${option1AnswerCount} / ${option1AnswerCount + option2AnswerCount}`;
        const votesOption2 = `${option2AnswerCount} / ${option1AnswerCount + option2AnswerCount}`;

        const percentageOption1 = (option1AnswerCount / (option1AnswerCount + option2AnswerCount)) * 100;
        const percentageOption2 = (option2AnswerCount / (option1AnswerCount + option2AnswerCount)) * 100;

        if(authedUser && Object.keys(authedUser).length > 0)
        {
            return (
                <div>
                    <h1>Would You Rather</h1>
                    <img
                        src={userAvatar}
                        alt={userName}
                        style={{width:100,height:100}}
                    />
                    <hr />
                    { answeredPoll ?
                    <div>
                        <div style={userChoice === 'optionOne' ?
                            {fontWeight: 'bold'} : {fontWeight: 'normal'}}>
                            <p>{ questionOption1 }</p>
                            <p>Number of votes {votesOption1}</p>
                            <p>Percentage of votes {`${percentageOption1} %`}</p>
                        </div>
                        <hr/>
                        <div style={userChoice === 'optionTwo' ?
                            {fontWeight: 'bold'} : {fontWeight: 'normal'}}>
                            <p>{ questionOption2 }</p>
                            <p>Number of votes {votesOption2}</p>
                            <p>Percentage of votes {`${percentageOption2} %`}</p>
                        </div>
                    </div>
                    :
                    <div>
                        <input
                            type='radio'
                            onClick={this.handleOnClick}
                            id='optionOne'
                            name='options'
                            value={this.state.option} />
                        <label htmlFor='optionOne'> { questionOption1 } </label>
                        <br />
                        <input
                            type='radio'
                            onClick={this.handleOnClick}
                            id='optionTwo'
                            name='options'
                            value={this.state.option} />
                        <label htmlFor='optionTwo'> { questionOption2 } </label>
                        <br />
                        <Button variant="primary" onClick={this.handleSubmit}>Submit</Button>
                    </div> }
                </div>
            );
        }
        else {
            alert('you need to logIn');
            return (
                <Redirect to='/ErrorPage' />
            );
        }
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { id } = props.match.params;
    let question = {};
    let userAvatar = '';
    let userName = '';
    let questionOption1 = '';
    let questionOption2 = '';
    let option1AnswerCount = 0;
    let option2AnswerCount = 0;
    let answeredPoll = false;
    let userChoice = '';

    if(id in questions) {
        question = questions[id];
        userAvatar = users[question.author].avatarURL;
        userName = users[question.author].name;
        questionOption1 = questions[id].optionOne.text;
        questionOption2 = questions[id].optionTwo.text;
        option1AnswerCount = questions[id].optionOne.votes.length;
        option2AnswerCount = questions[id].optionTwo.votes.length;
        if(questions[id].optionOne.votes.includes(authedUser.id) || questions[id].optionTwo.votes.includes(authedUser.id))
        {
            answeredPoll = true;
            if(questions[id].optionOne.votes.includes(authedUser.id)) {
                userChoice = 'optionOne';
            }
            else {
                userChoice = 'optionTwo';
            }
        }
    }

    return {
        authedUser,
        id,
        userAvatar,
        userName,
        questionOption1,
        questionOption2,
        option1AnswerCount,
        option2AnswerCount,
        answeredPoll,
        userChoice,
    };
}

export default connect(mapStateToProps)(PollDetails);