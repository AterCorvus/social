import React from "react";
import classes from "./Friend.module.css"
import Avatar from "../../../Avatar/Avatar";

const Friend = (props) => {
    return(
        <div>
            <Avatar src={props.avaUrl}/>
            {props.name}
        </div>
    );
};

export default Friend;
