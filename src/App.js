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

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <Sidebar />
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={() => (
                    <ProfileContainer />
                )}/>
                <Route path="/dialogs" render={() => (
                    <DialogsContainer />
                )}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users"
                       render={ () => <UsersContainer /> }/>
            </div>
        </div>
    );
};

export default App;
