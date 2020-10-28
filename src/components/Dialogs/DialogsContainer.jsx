import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage} from "../../redux/dialogs_reducer";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = state => {
    return {
        dialogs: state.dialogPage.dialogs
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Dialogs);