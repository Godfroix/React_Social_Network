import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    // isFetching: false,
};

const authReducer = (state = initialState, action) => {

    if (action.type === SET_USER_DATA) {
        return {
            ...state,
            ...action.data,
            // isAuth: true,
        }
    }
    return state;
}

export const setAuthUserData = (userId, login, email, isAuth) => ({ type: SET_USER_DATA, data: { userId, login, email, isAuth } })

export const getAuthUserData = () => {
    return (dispatch) => {
        return authAPI.getAuth().then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                // dispatch(setAuthUserData(data.id, data.login, data.email, true));
                dispatch(setAuthUserData(id, login, email, true));
            }
        });
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
            else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                dispatch(stopSubmit('login', { _error: message }));
            }
        });
    }
}


export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
    }
}

export default authReducer;