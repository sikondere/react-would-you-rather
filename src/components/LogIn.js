import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                <select
                    ref = {(element) => { this.selectRef = element}}
                    >
                    {userList}
                </select>
                <button onClick={this.handleSubmit}>LogIn</button>
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