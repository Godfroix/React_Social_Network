const ADD_MESSAGE = 'ADD-MESSAGE';

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
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === ADD_MESSAGE) {
        return {
            ...state,
            messages: [...state.messages, { id: 7, message: action.newMessageText }],
        }
    }
    return state;
}

export const sendMessageCreator = (newMessageText) => ({ type: ADD_MESSAGE, newMessageText })

export default dialogsReducer;