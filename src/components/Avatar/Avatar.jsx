import React from "react";
import classes from "./Avatar.module.css";

const Avatar = (props) => {
    return (
        <div className={classes.avatar}>
            <img  src={props.src} alt=""/>
        </div>
    );
};

export default Avatar;