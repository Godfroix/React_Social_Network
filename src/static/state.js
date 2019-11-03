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
        },
    },
    getState() {
        return this._state;
    },
    _callsubscriber() {
        console.log(' state changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callsubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callsubscriber(this._state);
    },
    subcribe(observer) {
        this._callsubscriber = observer; // наблюдатель
    },
}

export default store;
