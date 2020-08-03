import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {Authorize} from "../../redux/auth_reducer";
import Preloader from "../Preloader/Preloader";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.Authorize();
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
    profileIsFetching: state.profilePage.isFetching
});

export default connect(mapStateToProps, {
    Authorize})(HeaderContainer);