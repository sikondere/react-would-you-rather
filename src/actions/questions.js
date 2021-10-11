import { _saveQuestionAnswer, _saveQuestion } from '../data/_DATA';
import { createdPoll } from './users';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const SAVE_POLL = 'SAVE_POLL';
export const NEW_POLL = 'NEW_POLL';

 /**
     * @description a method that returns action object to get all questions
     * @param {object} questions
     * @returns {object} an action
     */
export function getQuestions(questions) {
    return ({
        type: GET_QUESTIONS,
        questions,
    });
}

 /**
     * @description a method that returns an action object to save a new poll
     * @param {object} response
     * @returns {object} an action
     */
function savePoll(response) {
    console.log(response)
    return ({
        type: SAVE_POLL,
        payload: response,
    });
}

 /**
     * @description a thunk to ansyncronously save a poll
     * @param {object} response
     * @returns {function} _saveQuestionAnswer
     */
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

 /**
     * @description a method that returns an action to create a new poll
     * @param {object} newPoll
     * @returns {object} an action
     */
function createPoll(newPoll) {
    return ({
        type: NEW_POLL,
        payload: newPoll,
    });
}

 /**
     * @description a thunk to ansyncronously save a poll
     * @param {object} newPoll
     * @returns {function} _saveQuestion
     */
export function handleCreatePoll(newPoll) {
    return (dispatch, getState) => {
        return _saveQuestion(newPoll)
            .then((response) =>{
                dispatch(createPoll(response))
                dispatch(createdPoll(response))
            })
    }
}