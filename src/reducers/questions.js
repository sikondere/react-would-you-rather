import { GET_QUESTIONS, SAVE_POLL, NEW_POLL } from "../actions/questions";

 /**
     * @description a method updates the questions state in the store
     * @param {object} state
     * @param {object} action
     * @returns {object} new state
     */
export default function questions(state={}, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };

        case SAVE_POLL:
            const { qid, answer, authedUser } = action.payload;
            return {
                ...state,
                [qid]: {
                    ...state[qid],
                    [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
            };

        case NEW_POLL:
            const { payload } = action;
            return {
                ...state,
                [payload.id]: payload
            };

        default:
            return state;
    }
}
