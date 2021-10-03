import { _saveQuestionAnswer, _saveQuestion } from '../data/_DATA';
import { createdPoll } from './users';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_POLL = 'SAVE_POLL';
export const NEW_POLL = 'NEW_POLL';

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

function createPoll(newPoll) {
    return ({
        type: NEW_POLL,
        payload: newPoll,
    });
}

export function handleCreatePoll(newPoll) {
    return (dispatch, getState) => {
        return _saveQuestion(newPoll)
            .then((response) =>{
                dispatch(createPoll(response))
                dispatch(createdPoll(response))
            })
    }
}