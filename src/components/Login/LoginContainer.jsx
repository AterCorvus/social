import React from "react";
import {Login as LoginThunk} from "../../redux/auth_reducer";
import Login from "./Login";
import {connect} from "react-redux";

const LoginContainer = (props) => {
    return <div>
            <Login login={props.LoginThunk} {...props}/>
        </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {LoginThunk})(LoginContainer);