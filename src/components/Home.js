import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab'
import PollsAnswered from './PollsAnswered';
import PollsUnAnswered from './PollsUnAnswered';

class Home extends Component {

    /**
     * @description  renders the main page that shows books on a user's shelf categorized into:  read, currently reading
     * or want to read shelfs
     * @returns an html element
     */

    render() {
        const { authedUser } = this.props;

        if(authedUser && Object.keys(authedUser).length > 0)
        {
            return (
                <div>
                    <Tabs defaultActiveKey="1" id="uncontrolled-tab-example" className="mb-3">
                        <Tab eventKey="1" title="Unanswered Questions">
                            <PollsUnAnswered />
                        </Tab>
                        <Tab eventKey="2" title="Answered Questions">
                            <PollsAnswered />
                        </Tab>
                    </Tabs>
                </div>
            );
        }
        else {
            alert('you need to be logged in to view the home page');
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

export default connect(mapStateToProps)(Home);