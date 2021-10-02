import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class PollsAnswered extends Component {

    render() {
        let { question_list, authedUser, users } = this.props
        let polls = question_list.map((item) => {
            return <li key={item.id}>
                <div>
                    <p>{users[item.author].name} asks:</p>
                    <p>Would you rather</p>
                    <p>...{item.optionOne.text}...</p>
                    <img
                        src={users[item.author].avatarURL}
                        alt={authedUser.name}
                        style={{width:60,height:60}}
                    />
                    <br/>
                    <Link to={`/question/${item.id}`}>View Poll</Link>
                </div>
            </li>
        })

        return (
            <div>
                <h2>answered polls</h2>
                <ul>
                    {polls}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    let answered_questions = users[authedUser.id];
    answered_questions = answered_questions.answers
    let question_list = [];
    for(let key of Object.keys(questions)) {
        if( key in answered_questions) {
            question_list.push(questions[key])
        }
    }
    question_list.sort((a, b) => {
        return new Date(a.timestamp) - new Date(b.timestamp);
    });
    question_list.reverse();

    return {
        question_list,
        users,
        authedUser,
    };
}

export default withRouter(connect(mapStateToProps)(PollsAnswered));