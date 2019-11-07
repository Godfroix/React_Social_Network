import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../static/dialogs_reducer';
import StoreContext from '../../storeContext';

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }

                    let onMessageChange = (text) => {
                        let action = updateNewMessageTextCreator(text);
                        store.dispatch(action);
                    }
                    return <Dialogs updateNewMessageTextCreator={onMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;