import React from "react";
import classes from "./FormControls.module.css";

const FormControl = ({input, meta, elementType, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={classes.formControl + " " + (hasError && classes.error)}>
        <div>
            {React.createElement(elementType, {...input, ...props})}
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
}

export const TextArea = (props) => {
    return <FormControl elementType="textarea" {...props}/>
}

export const Input = (props) => {
    return <FormControl elementType="input" {...props}/>
}