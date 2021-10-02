import { GET_USERS, USER_ANSWER_POLL } from "../actions/users";

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

        default:
            return state;
    }
}