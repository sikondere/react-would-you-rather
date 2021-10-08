import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class LeaderBoard extends Component {

    render() {

        const { authedUser, user_list } = this.props;
        let list = user_list.map((item) => {
            return (<ListGroup.Item key={item.id}>
            <Card style={{ width: '18rem' }}>
                    <Card.Img
                        variant="top"
                        src={item.avatar}
                        alt={item.name}
                        style={{width:100,height:100}}
                    />
                    <Card.Body>
                        <Card.Title><strong>{item.name} asks:</strong></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"><strong>Score: {item.questions_total}</strong></Card.Subtitle>
                        <Card.Text>
                            Answered questions: {item.questions_answered}<br/>
                            Created questions: {item.questions_asked}<br/>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </ListGroup.Item>)
        })
        if(authedUser && Object.keys(authedUser).length > 0) {
            return (
                <div>
                    <h1>Leader Board</h1>
                    <ListGroup>
                        {list}
                    </ListGroup>
                </div>
            );
        }
        else {
            alert('you need to be logged in to view the leaderboard');
            return (
                <Redirect to='/' />
            );
        }
    }
}

function mapStateToProps({ authedUser, users }) {
    let user_list = [];
    for(let key in users) {
        if(users.hasOwnProperty(key)) {
            user_list.push({
                id: users[key].id,
                name: users[key].name,
                avatar: users[key].avatarURL,
                questions_answered: Object.keys(users[key].answers).length,
                questions_asked: users[key].questions.length,
                questions_total: Object.keys(users[key].answers).length + users[key].questions.length,
            });
        }
    }

    user_list.sort((a,b) =>{
        return a.questions_total - b.questions_total;
    });
    user_list.reverse()

    return {
        authedUser,
        user_list,
    }
}
export default connect(mapStateToProps)(LeaderBoard);