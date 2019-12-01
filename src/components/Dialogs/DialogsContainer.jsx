import React from 'react';
import Dialogs from './Dialogs';
import { updateNewMessageTextCreator, sendMessageCreator } from '../../static/dialogs_reducer';
// import StoreContext from '../../storeContext';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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