import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../../static/profile_reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '../../../../../../Users/Настя/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (
            <div >
                <Profile {...this.props} profile={this.props.profile} />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let mapDispatchToProps = (dispatch) => {
    return {
        getUserProfile: (userId) => {
            dispatch(getUserProfile(userId))
        },
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
