import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { setAuthedUser } from '../actions/authUser';

class LogIn extends Component {

    selectRef = null;

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        if(this.selectRef.value !== '') {
            dispatch(setAuthedUser({
                id: this.selectRef.value,
                name: this.selectRef.options[this.selectRef.selectedIndex].text,
            }));
            this.props.history.push('/home');
        }
    }


    render() {

        let userList = this.props.userList.map((user) => {
            return <option value={user.id} key={user.id}>{user.name}</option>
        });

        userList.unshift(<option value={''} key={'empty'}>--Please Select--</option>);

        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Would-You-Rather</Card.Title>
                        <Card.Text>
                            Sign In
                        </Card.Text>
                        <select
                            ref = {(element) => { this.selectRef = element}}
                            >
                            {userList}
                        </select>
                        <br/>
                        <Button variant="primary" onClick={this.handleSubmit}>LogIn</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    let userList = []
    for(let key in users) {
        userList.push({id:key, name:users[key].name});
    }
    return {
        userList,
    };
}

export default connect(mapStateToProps)(LogIn);