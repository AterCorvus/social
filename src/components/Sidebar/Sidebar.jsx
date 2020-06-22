import React from "react";
import classes from "./Sidebar.module.css";
import Navbar from "./Navbar/Navbar";
import FriendListContainer from "./FriendList/FriendListContainer";
const Sidebar = (props) => {
    return(
        <div className={classes.nav}>
            <Navbar/>
            <FriendListContainer/>
        </div>
    );
};

export default Sidebar;