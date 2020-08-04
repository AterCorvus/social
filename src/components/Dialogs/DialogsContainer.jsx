import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessage, updateAnswerMessage} from "../../redux/dialogs_reducer";

let mapStateToProps = state => {
    return {
        dialogs: state.dialogPage.dialogs,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, {updateAnswerMessage, sendMessage})(Dialogs);

export default DialogsContainer;