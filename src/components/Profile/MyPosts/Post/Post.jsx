import React from 'react';
import classes from './Post.module.css';
import Avatar from "../../../Avatar/Avatar";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <Avatar src={props.avatar}/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    );
};

export default Post;