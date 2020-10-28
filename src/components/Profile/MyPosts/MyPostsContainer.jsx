import React from "react";
import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/profile_reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts, avatar: state.profilePage.avatar, newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;