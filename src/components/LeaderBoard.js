import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class LeaderBoard extends Component {

    render() {

        const { authedUser, user_list } = this.props;
        let list = user_list.map((item) => {
            return (<li key={item.id}>
                <p>{item.name}</p>
                <img
                    src={item.avatar}
                    alt={item.name}
                    style={{width:60,height:60}}
                />
                <p>Questions Answered: {item.questions_answered}</p>
                <p>Questions Asked: {item.questions_asked}</p>
                <p>Total Questions: {item.questions_total}</p>
                <hr/>
            </li>)
        })
        if(authedUser && Object.keys(authedUser).length > 0) {
            return (
                <div>
                    <h1>Leader Board</h1>
                    <ul>
                        {list}
                    </ul>
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