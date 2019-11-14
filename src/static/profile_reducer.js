const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:
        [
            { id: 1, message: 'Ya verulsya iz nebitiya', likesCount: 20 },
            { id: 2, message: 'Hi zyabls', likesCount: 120 },
            { id: 3, message: 'Izi dlya papizi', likesCount: 53 },
            { id: 4, message: 'Eto dedu nada', likesCount: 141 },
        ],
    newPostText: 'HAAAAAI',
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
    return state;
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const addNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


export default profileReducer;