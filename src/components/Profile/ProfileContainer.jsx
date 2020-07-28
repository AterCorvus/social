import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import {withRouter} from "react-router";
import {ProfileApi} from "../../api/api";

class ProfileContainer extends React.Component{

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : '2';
        ProfileApi.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response);
            });
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

let WithUrlProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlProfileContainer);