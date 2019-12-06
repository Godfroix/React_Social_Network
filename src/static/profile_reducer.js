import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts:
        [
            { id: 1, message: 'Ya verulsya iz nebitiya', likesCount: 20 },
            { id: 2, message: 'Hi zyabls', likesCount: 120 },
            { id: 3, message: 'Izi dlya papizi', likesCount: 53 },
            { id: 4, message: 'Eto dedu nada', likesCount: 141 },
        ],
    newPostText: 'HAAAAAI',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0,
        }
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: '',
        }
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        return {
            ...state,
            newPostText: action.newText,
        }
    }
    else if (action.type === SET_USER_PROFILE) {
        return {
            ...state,
            profile: action.profile,
        }
    }
    else if (action.type === SET_STATUS) {
        return {
            ...state,
            status: action.status,
        }
    }
    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const addNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        });
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    }
}

export default profileReducer;