import React from 'react';
import Dialogs from './Dialogs';
import { sendMessageCreator } from '../../static/dialogs_reducer';
// import StoreContext from '../../storeContext';
import { connect } from 'react-redux';
import { compose } from '../../../../../../Users/Настя/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageCreator(newMessageText))
        },
    }
}

let DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = witAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;