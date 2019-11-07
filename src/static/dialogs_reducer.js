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
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: ADD_MESSAGE })

export const updateNewMessageTextCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: text
})

export default dialogsReducer;