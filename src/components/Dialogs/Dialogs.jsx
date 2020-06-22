import React from 'react';
import classes from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageC, updateAnswerMessage} from "../../redux/dialogs_reducer";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => {
            return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avaUrl = {dialog.avatar}
                               savedTemplate={dialog.savedTemplate} messages={dialog.messages}
                               updateAnswerMessage={props.updateAnswerMessage}
                               sendMessageC={props.sendMessageC}/>;
        });


    return (
        <div>
            <div className={classes.dialogs}>
                    {dialogsElements}
            </div>
        </div>
    );
};

export default Dialogs;