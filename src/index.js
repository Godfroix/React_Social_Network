import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { posts, dialogs, messages } from './static/state'

let posts = [
    { id: 1, message: 'Ya verulsya iz nebitiya', likesCount: 20 },
    { id: 2, message: 'Hi zyabls', likesCount: 120 },
    { id: 3, message: 'Izi dlya papizi', likesCount: 53 },
    { id: 4, message: 'Eto dedu nada', likesCount: 141 },
]

let dialogs = [
    { id: 1, name: 'Vitalii King' },
    { id: 2, name: 'Valera Gladiator' },
    { id: 3, name: 'Pukich' },
    { id: 4, name: 'Guchibass' },
    { id: 5, name: 'Alexander Borisov' },
]

let messages = [
    { id: 1, message: 'Zdarova rabotyagi' },
    { id: 2, message: 'Hi boys, hi girls, hi babyborns' },
    { id: 3, message: 'Govorite ne molchite' },
    { id: 4, message: 'DA DA DA' },
    { id: 5, message: 'OPA f5' },
    { id: 6, message: 'YA Sanya sportsmen' },
]

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
