import React from 'react';
import dialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Redirect } from 'react-router-dom';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)
    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageCreator(text);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogsCss.messages}>
                <div>
                    <div>
                        {messagesElements}
                    </div>
                    <div className={dialogsCss.create}>
                        <div>
                            <textarea placeholder='Enter your message' onChange={onMessageChange} value={newMessageText} className={dialogsCss.area}></textarea>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick} className={dialogsCss.btn}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;