import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {loadProfile, loadStatus, updateStatus} from "../../redux/profile_reducer";
import {withRouter} from "react-router";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.myId;
        if (!userId)
            this.props.history.push("/login");
        this.props.loadProfile(userId);
        this.props.loadStatus(userId);
    }

    render()  {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, {loadProfile, loadStatus, updateStatus}),
    withRouter
)(ProfileContainer);