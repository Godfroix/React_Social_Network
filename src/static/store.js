import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

let store = {
    _state: {
        profilePage: {
            posts:
                [
                    { id: 1, message: 'Ya verulsya iz nebitiya', likesCount: 20 },
                    { id: 2, message: 'Hi zyabls', likesCount: 120 },
                    { id: 3, message: 'Izi dlya papizi', likesCount: 53 },
                    { id: 4, message: 'Eto dedu nada', likesCount: 141 },
                ],
            newPostText: 'HAAAAAI',
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Vitalii King' },
                { id: 2, name: 'Valera Gladiator' },
                { id: 3, name: 'Pukich' },
                { id: 4, name: 'Guchibass' },
                { id: 5, name: 'Alexander Borisov' },
            ]
        }
    },
    _callsubscriber() {
        console.log(' state changed');
    },
    getState() {
        return this._state;
    },
    subcribe(observer) {
        this._callsubscriber = observer; // наблюдатель
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callsubscriber(this._state);
    }
}

export default store;
