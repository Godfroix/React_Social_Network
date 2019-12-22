import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setCurrentPage, toggleFollowingProgress, requestUsers, follow, unfollow } from '../../static/users_reducer'
import Preloader from '../Common/Preloader/Preloader';
import { compose } from '../../../../../../Users/Настя/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { getPageSizeSelector, getUsersSelector, getTotalUsersCountSelector, getCurrentPageSelector, getIsFetchingSelector, getFollowingInProgressSelector } from '../../static/users_selectors';


class UsersAPIContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
};


let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgressSelector(state),
    }
}



let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPage(currentPage))
        },
        toggleFollowingProgress: (isFetching, usersId) => {
            dispatch(toggleFollowingProgress(isFetching, usersId))
        },
        requestUsers: (currentPage, pageSize) => {
            dispatch(requestUsers(currentPage, pageSize))
        },
        follow: (userId) => {
            dispatch(follow(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollow(userId))
        },
    }
}

// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

// export default UsersContainer;

const UsersContainer = compose(
    // withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersAPIContainer)

export default UsersContainer;