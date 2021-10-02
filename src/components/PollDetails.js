import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class PollDetails extends Component {

    state = {
        option:''
    }

    handleOnClick = (e) => {
        this.setState({
            option: e.target.id,
        })
    };

    render() {

        const { authedUser, id, userAvatar, userName, answeredPoll,
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
                        style={{width:60,height:60}}
                    />
                    <br />
                    { answeredPoll ?
                    <div>
                        <p>{ questionOption1 }</p>
                        <p>Number of votes {votesOption1}</p>
                        <p>Percentage of votes {`${percentageOption1} %`}</p>
                        <p>{ questionOption2 }</p>
                        <p>Number of votes {votesOption2}</p>
                        <p>Percentage of votes {`${percentageOption2} %`}</p>
                    </div> :
                    <div>
                        <input
                            type='radio'
                            onClick={this.handleOnClick}
                            id='option1'
                            name='options'
                            value={this.state.option1} />
                        <label htmlFor='option1'> { questionOption1 } </label>
                        <br />
                        <input
                            type='radio'
                            onClick={this.handleOnClick}
                            id='option2'
                            name='options'
                            value={this.state.option2} />
                        <label htmlFor='option2'> { questionOption2 } </label>
                        <br />
                        <button>Submit</button>
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
    };
}

export default connect(mapStateToProps)(PollDetails);