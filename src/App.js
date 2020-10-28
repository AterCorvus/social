import React from 'react';
import './App.css';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Sidebar from "./components/Sidebar/Sidebar";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/LoginContainer";
import {initializeThunk as initialize} from "./redux/app_reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import { withRouter } from "react-router";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (!this.props.initialized)
            return <Preloader />

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Sidebar/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>
                    <Route path="/login"
                           render={() => <LoginPage/>}/>
                </div>
            </div>
        )
    }
}

const mapSteteTOProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapSteteTOProps, {initialize}))(App)
