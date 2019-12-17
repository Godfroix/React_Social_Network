// import { authAPI } from "../api/api";
import { getAuthUserData } from "./auth_reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {

    if (action.type === INITIALIZED_SUCCESS) {
        return {
            ...state,
            initialized: true,
        }
    }
    return state;
}

export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
        Promise.all([promise]).then(() => {
            dispatch(setInitializedSuccess());
        })
    }
}

export default appReducer;