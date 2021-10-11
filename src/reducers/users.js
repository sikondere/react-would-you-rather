import { GET_USERS, USER_ANSWER_POLL, CREATED_POLL } from "../actions/users";

 /**
     * @description a method updates the users state in the store
     * @param {object} state
     * @param {object} action
     * @returns {object} new state
     */
export default function users(state={}, action) {
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users,
            };

        case USER_ANSWER_POLL:
            const { qid, answer, authedUser } = action.payload;
            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer
                    }
                }
            };

        case CREATED_POLL:
            const { payload } = action;
            return {
                ...state,
                [payload.author]: {
                    ...state[payload.author],
                    questions: state[payload.author].questions.concat([payload.id])
                }
            };

        default:
            return state;
    }
}