import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile_reducer";
import * as axios from "axios";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component{

    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId: '2';
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data);
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