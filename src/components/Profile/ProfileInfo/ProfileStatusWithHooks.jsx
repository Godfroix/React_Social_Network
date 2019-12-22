import React, { useState, useEffect } from 'react';
import profileInfoCss from './ProfileInfo.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false); //возвращает массив

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    let [status, setStatus] = useState(props.status);

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Status is empty'}</span>
                    {/* <span onDoubleClick={this.activateEditMode}>{this.props.status != '' ? this.props.status : "Status is empty"}</span> */}
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
                </div>
            }
        </div >
    )
}
export default ProfileStatusWithHooks;

