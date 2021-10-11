import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class PollsAnswered extends Component {

    /**
     * @description  renders the list of polls ansered by the loggined user
     * @returns an html element
     */
    render() {
        let { question_list, authedUser, users } = this.props
        let polls = question_list.map((item) => {
            return <ListGroup.Item key={item.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src={users[item.author].avatarURL}
                        alt={authedUser.name}
                        style={{width:100,height:100}}
                    />
                    <Card.Body>
                        <Card.Title><strong>{users[item.author].name} asks:</strong></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><strong>Would you rather</strong></Card.Subtitle>
                        <Card.Text>
                            ...{item.optionOne.text}...
                        </Card.Text>
                        <Link to={`/question/${item.id}`}>View Poll</Link>
                    </Card.Body>
                </Card>
            </ListGroup.Item>
        })

        return (
            <div>
                <ListGroup>
                    {polls}
                </ListGroup>
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