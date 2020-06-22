import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "../../Avatar/Avatar";

const DialogItem = (props) => {
    let answerText = React.createRef();

    let onMesTextChange = () => {
        props.updateAnswerMessage(props.id, answerText.current.value);
    };

    let sendMessage = () => {
        props.sendMessageC(props.id);
    };
    return (
        <div className={classes.dialog}>
            <Avatar src={props.avaUrl}/>
            <NavLink className={classes.name} to={props.id}>{props.name}</NavLink>
            <div className={classes.message}>{props.messages[props.messages.length - 1].text}</div>
            <textarea ref={answerText} value={props.savedTemplate} onChange={onMesTextChange}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default DialogItem;