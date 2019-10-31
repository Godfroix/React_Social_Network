import React from 'react';
import dialogsCss from './../Dialogs.module.css';


const Message = (props) => {
    return (
        <div className={dialogsCss.message}>{props.message}</div>
    )
}
export default Message;