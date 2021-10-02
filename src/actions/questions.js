import { _saveQuestionAnswer } from '../data/_DATA';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_POLL = 'SAVE_POLL';

export function getQuestions(questions) {
    return ({
        type: GET_QUESTIONS,
        questions,
    });
}

function savePoll(response) {
    console.log(response)
    return ({
        type: SAVE_POLL,
        payload: response,
    });
}

export function handleSavePoll(response) {
    const { qid, answer, authedUser } = response;
    return (
        (dispatch, getState) => {

            return _saveQuestionAnswer({
                authedUser,
                qid,
                answer,
            })
                .then((answer) => dispatch(savePoll(response)))
        }
    );
}