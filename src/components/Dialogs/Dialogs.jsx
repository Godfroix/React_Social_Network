import React from 'react';
import dialogsCss from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import { Textarea } from '../Common/FormsControls/FormsControls';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageText);
    }

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
                        <AddMessageReduxForm onSubmit={addNewMessage} />
                        {/* <div>
                            <textarea placeholder='Enter your message' onChange={onMessageChange} value={newMessageText} className={dialogsCss.area}></textarea>
                        </div>
                        <div>
                            <button onClick={onSendMessageClick} className={dialogsCss.btn}>Send message</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageText' placeholder='Enter your message' className={dialogsCss.area} validate={[requiredField, maxLength50]}></Field>
            </div>
            <div>
                <button className={dialogsCss.btn}>Send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)


export default Dialogs;