import { USER_ACTIONS } from "../actions";

export const setCurrentUser = user => ({
    type: USER_ACTIONS.SET_CURRENT_USER,
    payload: user
});