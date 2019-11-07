import React from 'react';
import MyPosts from './MyPosts';
import { addNewPostTextActionCreator, addPostActionCreator } from '../../../static/profile_reducer';
import StoreContext from '../../../storeContext';

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().profilePage;
                    let addPost = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = addNewPostTextActionCreator(text);
                        store.dispatch(action);
                    }
                    return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.posts} newPostText={state.newPostText} />
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;