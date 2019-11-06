import React from 'react';
import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h3 className={myPostsCss.title}>My Posts</h3>
            <div className={myPostsCss.create}>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} className={myPostsCss.area}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost} className={myPostsCss.btn}>Add post</button>
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