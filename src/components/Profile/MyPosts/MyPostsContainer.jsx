import React from 'react';
import MyPosts from './MyPosts';
import { addNewPostTextActionCreator, addPostActionCreator } from '../../../static/profile_reducer';

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = addNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />)
}
export default MyPostsContainer;