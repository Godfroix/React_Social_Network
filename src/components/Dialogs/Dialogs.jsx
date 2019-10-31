import React from 'react';
import dialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.messages.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogsCss.messages}>
                {messagesElements}
            </div>
        </div>
    );
}

export default Dialogs;