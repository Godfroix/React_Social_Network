import React from 'react';
import dialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { addNewMessageTextActionCreator, addMessageActionCreator } from '../../static/state';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)

    let messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = addNewMessageTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={dialogsCss.messages}>
                {messagesElements}
            </div>
            <div className={dialogsCss.create}>
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.state.newMessageText} className={dialogsCss.area}></textarea>
                </div>
                <div>
                    <button onClick={addMessage} className={dialogsCss.btn}>Add message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;