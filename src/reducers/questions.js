import { GET_QUESTIONS, SAVE_POLL } from "../actions/questions";

export default function questions(state={}, action) {
    switch(action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions,
            };

        case SAVE_POLL:
            const { qid, answer, authedUser } = action.payload;
            console.log(qid)
            console.log(answer)
            console.log(authedUser)
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

        default:
            return state;
    }
}
