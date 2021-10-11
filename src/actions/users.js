export const GET_USERS = 'GET_USERS';
export const USER_ANSWER_POLL = 'USER_ANSWER_POLL';
export const CREATED_POLL = 'CREATED_POLL';

 /**
     * @description a method an action to get all users
     * @param {object} users
     * @returns {object} an action object
     */
export function getUsers(users) {
    return {
        type: GET_USERS,
        users,
    };
}

 /**
     * @description a method an action to answer a poll
     * @param {object} response
     * @returns {object} an action object
     */
export function answerPoll(response) {
    return {
        type: USER_ANSWER_POLL,
        payload: response,
    }
}

 /**
     * @description a method an action to create a poll
     * @param {object} newPoll
     * @returns {object} an action object
     */
export function createdPoll(newPoll) {
    return {
        type: CREATED_POLL,
        payload: newPoll,
    }
}