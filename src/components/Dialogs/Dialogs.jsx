import React from 'react';
import classes from './Dialog.module.css';
import DialogItem from "./DialogItem/DialogItem";
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(dialog => {
        return <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} avaUrl={dialog.avatar}
                           savedTemplate={dialog.savedTemplate} messages={dialog.messages}
                           updateAnswerMessage={props.updateAnswerMessage}
                           sendMessage={props.sendMessage}/>;
    });

    if (!props.isAuth) return <Redirect to="/login" />;

    return (
        <div>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
        </div>
    );
};

export default Dialogs;