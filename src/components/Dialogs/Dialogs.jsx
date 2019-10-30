import React from 'react';
import Dialogscss from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={`${Dialogscss.dialog} ${Dialogscss.active}`}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={Dialogscss.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let DialogsData = [
        { id: 1, name: 'Vitalii King' },
        { id: 2, name: 'Valera Gladiator' },
        { id: 3, name: 'Pukich' },
        { id: 4, name: 'Guchibass' },
        { id: 5, name: 'Alexander Borisov' },
    ]

    let MessagesData = [
        { id: 1, message: 'Zdarova rabotyagi' },
        { id: 2, message: 'Hi boys, hi girls, hi babyborns' },
        { id: 3, message: 'Govorite ne molchite' },
        { id: 4, message: 'DA DA DA' },
        { id: 5, message: 'OPA f5' },
        { id: 6, message: 'YA Sanya sportsmen' },
    ]

    return (
        <div className={Dialogscss.dialogs}>
            <div className={Dialogscss.dialogsItems}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
            </div>
            <div className={Dialogscss.messages}>
                <Message message={MessagesData[0].message} id={MessagesData[0].id} />
                <Message message={MessagesData[1].message} id={MessagesData[1].id} />
                <Message message={MessagesData[2].message} id={MessagesData[2].id} />
                <Message message={MessagesData[3].message} id={MessagesData[3].id} />
                <Message message={MessagesData[4].message} id={MessagesData[4].id} />
                <Message message={MessagesData[5].message} id={MessagesData[5].id} />
            </div>
        </div>
    );
}

export default Dialogs;