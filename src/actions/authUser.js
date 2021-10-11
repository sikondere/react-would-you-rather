export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const REMOVE_AUTHED_USER = 'REMOVE_AUTHED_USER';

 /**
     * @description a method that returns an  action object to create a new authenticated user
     * @param {object} user
     * @returns {object} plain javascript object with a type and user property
     */
export function setAuthedUser(user) {
    return {
        type: SET_AUTHED_USER,
        user,
    }
}

 /**
     * @description a method that returns an action to remove the autheniticated user
     * @returns {array} plain javascript object with a type property
     */
export function removeAuthedUser() {
    return {
        type: REMOVE_AUTHED_USER,
    }
}