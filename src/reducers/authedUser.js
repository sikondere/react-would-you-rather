import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from "../actions/authUser";

 /**
     * @description a method updates the authedUsers state in the store
     * @param {object} state
     * @param {object} action
     * @returns {object} new state
     */
export default function authedUser(state={}, action) {
    switch(action.type) {
        case SET_AUTHED_USER:
            return action.user;
        case REMOVE_AUTHED_USER:
            return {};
        default:
            return state;
    }
}