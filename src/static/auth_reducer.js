import { authAPI } from "../api/api";

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
            isAuth: true,
        }
    }
    return state;
}

export const setAuthUserData = (userId, login, email) => ({ type: SET_USER_DATA, data: { userId, login, email } })

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuth().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email));
            }
        });
    }
}

export default authReducer;