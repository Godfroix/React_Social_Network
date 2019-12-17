import React from 'react';
import myPostsCss from './MyPosts.module.css';
import Post from './Post/Post';
import { reduxForm, Field } from 'redux-form';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';
import { Textarea } from '../../Common/FormsControls/FormsControls'


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={myPostsCss.addPosts}>
            <h3 className={myPostsCss.title}>My Posts</h3>
            <div className={myPostsCss.create}>
                <AddNewPostReduxForm onSubmit={onAddPost} />
            </div>
            <div className={myPostsCss.posts}>
                {postsElements}
            </div>
        </div>

    )
}

const maxLength20 = maxLengthCreator(20);


const AddNewPostForm = (props) => {
    return (
        <>
            <form onSubmit={props.handleSubmit} className={myPostsCss.form}>
                <div>
                    <Field component={Textarea} name='newPostText' className={myPostsCss.area} placeholder='Enter your text' validate={[requiredField, maxLength20]}></Field>
                </div>
                <div>
                    <button className={myPostsCss.btn}>Add post</button>
                    {/* <button className={myPostsCss.btn}>Remove</button> */}
                </div>
            </form>
        </>
    )
}


const AddNewPostReduxForm = reduxForm({
    form: 'addNewPostForm'
})(AddNewPostForm)


export default MyPosts;