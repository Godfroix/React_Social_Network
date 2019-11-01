import React from 'react';
import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';
// import { posts } from './../../../static/state'

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div>
            <h3 className={myPostsCss.title}>My Posts</h3>
            <div className={myPostsCss.create}>
                <div>
                    <textarea ref={newPostElement} className={myPostsCss.area}></textarea>
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