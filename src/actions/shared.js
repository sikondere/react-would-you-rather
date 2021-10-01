import { _getUsers, _getQuestions } from '../data/_DATA';
import { getUsers } from './users';
import { setAuthedUser } from './authUser';
import { getQuestions } from './questions';

export function handleInitialUserData() {
    return ((dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(getUsers(users));
                dispatch(setAuthedUser({}));
            });
    });
}

export function handleInitialQuestionData() {
    return ((dispatch) => {
        return _getQuestions()
            .then((questions) => {
                dispatch(getQuestions(questions));
            });
    });
}