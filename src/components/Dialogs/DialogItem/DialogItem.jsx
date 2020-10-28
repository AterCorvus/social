import React from "react";
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import Avatar from "../../Avatar/Avatar";
import {Field, reduxForm} from "redux-form";
import {TextArea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

const maxLengthValid = maxLengthCreator(50);

const DialogItemForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit} className={classes.dialogForm}>
            <div>
                <Field placeholder={Text} name={"message"} component={TextArea}
                validate={[required, maxLengthValid]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    </div>
}

const DialogReduxForm = reduxForm({
    form: 'dialog'
})(DialogItemForm);

const DialogItem = (props) => {
    let answerText = React.createRef();

    const onSubmit = (formData) => {

    }

    return (
        <div className={classes.dialog}>
            <Avatar src={props.avaUrl}/>
            <NavLink className={classes.name} to={props.id}>{props.name}</NavLink>
            <div className={classes.message}>{props.messages[props.messages.length - 1].text}</div>
            <DialogReduxForm onSubmit={onSubmit()}/>
        </div>
    );
};

export default DialogItem;