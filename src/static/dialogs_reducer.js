const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs:
        [
            { id: 1, name: 'Vitalii King' },
            { id: 2, name: 'Valera Gladiator' },
            { id: 3, name: 'Pukich' },
            { id: 4, name: 'Guchibass' },
            { id: 5, name: 'Alexander Borisov' },
        ],
    messages:
        [
            { id: 1, message: 'Zdarova rabotyagi' },
            { id: 2, message: 'Hi boys, hi girls, hi babyborns' },
            { id: 3, message: 'Govorite ne molchite' },
            { id: 4, message: 'DA DA DA' },
            { id: 5, message: 'OPA f5' },
            { id: 6, message: 'YA Sanya sportsmen' },
        ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        return {
            ...state,
            messages: [...state.messages, { id: 7, message: state.newMessageText }],
            newMessageText: '',
        }
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        return {
            ...state,
            newMessageText: action.newText
        };
    }
    return state;
}

export const sendMessageCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})

export default dialogsReducer;