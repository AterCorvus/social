import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth_reducer";
import {setUserProfile} from "../../redux/profile_reducer";
import {AuthApi, ProfileApi} from "../../api/api";
import {toggleIsFetcing as profileToggleIsFetching} from "../../redux/profile_reducer";
import Preloader from "../Preloader/Preloader";

class HeaderContainer extends React.Component {

    componentDidMount() {
        AuthApi.Authorize()
            .then(response => {
                if (response.resultCode === 0) {
                    const {id, email, login} = response.data;
                    this.props.setAuthUserData(id, email, login);
                    this.props.profileToggleIsFetching(true);
                    return ProfileApi.getProfile(id);
                }
            })
            .then(response => {
                this.props.setUserProfile(response);
                this.props.profileToggleIsFetching(false);
            });
    }

    render() {
        return <>
            {this.props.profileIsFetching && <Preloader />}
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile,
    pprofileIsFetching: state.profilePage.isFetching
});

export default connect(mapStateToProps, {
    setAuthUserData, setUserProfile, profileToggleIsFetching})(HeaderContainer);