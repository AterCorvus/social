import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {Logout} from "../../redux/auth_reducer";
import Preloader from "../common/Preloader/Preloader";

class HeaderContainer extends React.Component {
    render() {
        return <>
            {this.props.profileIsFetching && <Preloader/>}
            <Header {...this.props} />
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile,
    profileIsFetching: state.profilePage.isFetching
});

export default connect(mapStateToProps, {
    Logout
})(HeaderContainer);