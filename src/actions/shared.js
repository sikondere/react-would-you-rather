import { _getUsers, _getQuestions } from '../data/_DATA';
import { getUsers } from './users';
import { setAuthedUser } from './authUser';
import { getQuestions } from './questions';

 /**
     * @description a method that returns users from the backend
     * @returns {function} _getUsers
     */
export function handleInitialUserData() {
    return ((dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(getUsers(users));
                dispatch(setAuthedUser({}));
            });
    });
}

 /**
     * @description a method that returns all questions from the backend
     * @returns {function} _getQuestions
     */
export function handleInitialQuestionData() {
    return ((dispatch) => {
        return _getQuestions()
            .then((questions) => {
                dispatch(getQuestions(questions));
            });
    });
}