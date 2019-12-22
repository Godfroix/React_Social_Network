import React from 'react';
import profileInfoCss from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    }

    componentDidUpdate(precProps, prevState) {
        if (precProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        // console.log('componentDidUpdate');
    }

    render() {
        // console.log('render');
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Status is empty'}</span>
                        {/* <span onDoubleClick={this.activateEditMode}>{this.props.status != '' ? this.props.status : "Status is empty"}</span> */}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
                    </div>
                }
            </div >
        )
    }
}
export default ProfileStatus;

