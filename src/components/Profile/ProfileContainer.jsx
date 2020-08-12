import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {loadProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : '2';
        this.props.loadProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    connect(mapStateToProps, {loadProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);