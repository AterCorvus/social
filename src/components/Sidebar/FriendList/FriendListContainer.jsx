import FriendList from "./FriendList";
import {connect} from "react-redux";

let mapStateToProps = state => {
    return {
        dialogs: state.dialogPage.dialogs
    }
}

const FriendListContainer = connect(mapStateToProps)(FriendList);

export default FriendListContainer;