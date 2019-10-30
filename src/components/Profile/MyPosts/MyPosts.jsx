import React from 'react';
import MyPostscss from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let PostData = [
        { id: 1, message: 'Ya verulsya iz nebitiya', likesCount: 20 },
        { id: 2, message: 'Hi zyabls', likesCount: 120 },
    ]

    return (
        <div>
            <h3 className={MyPostscss.title}>My Posts</h3>
            <div className={MyPostscss.create}>
                <div>
                    <textarea className={MyPostscss.area}></textarea>
                </div>
                <div>
                    <button className={MyPostscss.btn}>Add post</button>
                    <button className={MyPostscss.btn}>Remove</button>
                </div>
            </div>
            <div className={MyPostscss.posts}>
                <Post message={PostData[0].message} likesCount={PostData[0].likesCount} id={PostData[0].id} />
                <Post message={PostData[1].message} likesCount={PostData[1].likesCount} id={PostData[1].id} />
            </div>
        </div>

    )
}
export default MyPosts;