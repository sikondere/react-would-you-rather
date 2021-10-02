export const GET_USERS = 'GET_USERS';
export const USER_ANSWER_POLL = 'USER_ANSWER_POLL';

export function getUsers(users) {
    return {
        type: GET_USERS,
        users,
    };
}

export function answerPoll(response) {
    return {
        type: USER_ANSWER_POLL,
        payload: response,
    }
}