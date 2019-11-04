import React from 'react';
import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';
import { addNewPostTextActionCreator, addPostActionCreator } from '../../../static/state';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        //props.addPost();
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = addNewPostTextActionCreator(text);
        //props.updateNewPostText(text);
        // let action = { type: 'UPDATE-NEW-POST-TEXT', newText: text }
        props.dispatch(action);
    }

    return (
        <div>
            <h3 className={myPostsCss.title}>My Posts</h3>
            <div className={myPostsCss.create}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={myPostsCss.area}></textarea>
                </div>
                <div>
                    <button onClick={addPost} className={myPostsCss.btn}>Add post</button>
                    <button className={myPostsCss.btn}>Remove</button>
                </div>
            </div>
            <div className={myPostsCss.posts}>
                {postsElements}
            </div>
        </div>

    )
}
export default MyPosts;