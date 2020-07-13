import React from "react";
import MyPosts from "./MyPosts";
import {addPostC, updateNewPostText} from "../../../redux/profile_reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts, avatar: state.profilePage.avatar, newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostText(text)),
        addPostC: () => dispatch(addPostC())
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;