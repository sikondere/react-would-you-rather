import { _getUsers } from '../data/_DATA';
import { getUsers } from './users';
import { setAuthedUser } from './authUser';

export function handleInitialData() {
    return ((dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(getUsers(users));
                dispatch(setAuthedUser({}))
            });
    });
}