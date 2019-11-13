import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../static/dialogs_reducer';
// import StoreContext from '../../storeContext';
import { connect } from 'react-redux';

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;

//                     let onSendMessageClick = () => {
//                         store.dispatch(sendMessageCreator());
//                     }

//                     let onMessageChange = (text) => {
//                         let action = updateNewMessageTextCreator(text);
//                         store.dispatch(action);
//                     }
//                     return <Dialogs updateNewMessageCreator={onMessageChange} sendMessage={onSendMessageClick} dialogsPage={state} />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator())
        },
        updateNewMessageCreator: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;