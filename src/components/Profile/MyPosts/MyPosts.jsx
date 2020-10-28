import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";

const maxLengthValid = maxLengthCreator(10);

const NewPostForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Text"} name={"text"} component={TextArea}
                validate={[required, maxLengthValid]}/>
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    </div>
}

const NewPostReduxForm = reduxForm({
    form: 'newPost'
})(NewPostForm);

const MyPosts = (props) => {
    let postElements = props.posts
        .map(post => <Post key={post.id} id={post.id} message={post.message} likesCount={post.likesCount}
                           avatar={props.avatar}/>);

    const onSubmit = (formData) => {

    }

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <NewPostReduxForm onSubmit={onSubmit}/>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postElements}
            </div>
        </div>
    );
};

export default MyPosts;