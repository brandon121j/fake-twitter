import { configureStore } from "@reduxjs/toolkit";
import { fetchUser } from "../data/LoginData";

const ACTION = {
    SIGN_IN: 'signIn',
    SIGN_OUT: 'signOut',
    POST_TWEET: 'postTweet'
}

const {SIGN_IN, SIGN_OUT, POST_TWEET} = ACTION;

const loggedInUser = JSON.parse(window.localStorage.getItem())

export const userReducer = (state = loggedInUser, action) => {
    if (action.type === SIGN_IN) {
        return action.payload.loginData
    } else if (action.type === SIGN_OUT) {
        return state
    }
    return state
}

export async function signInAction(dispatch, getState) {
    try {
        let user = await fetchUser('brandon121j@email.com', 'password');

        dispatch({
            type: SIGN_IN,
            payload: {
                user: user
            }
        })
    } catch(err) {
        console.log(err);
    }
}