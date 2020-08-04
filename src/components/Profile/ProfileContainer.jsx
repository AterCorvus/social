import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {loadProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router";
import { Redirect } from 'react-router-dom';

class ProfileContainer extends React.Component{

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : '2';
        this.props.loadProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to="/login" />;
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {loadProfile})(WithUrlProfileContainer);