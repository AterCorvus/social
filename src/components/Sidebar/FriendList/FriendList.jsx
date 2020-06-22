import React from "react";
import classes from "./FriendList.module.css"
import Friend from "./Friend/Friend";

const FriendList = (props) => {
    let friends = props.dialogs.slice(0, 3)
        .map(friend => <Friend key={friend.id} name={friend.name} avaUrl={friend.avatar}/>
        );

    return(
        <div className={classes.flist}>
            <h1>Friends</h1>
                {friends}
        </div>
    );
};

export default FriendList;