import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageC, updateAnswerMessage} from "../../redux/dialogs_reducer";

let mapStateToProps = state => {
    return {
        dialogs: state.dialogPage.dialogs
    }
}

let mapDispatchToProps = dispatch => {
    return {
        updateAnswerMessage: (id, text) => dispatch(updateAnswerMessage(id, text)),
        sendMessageC: (id) => dispatch(sendMessageC(id))
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;