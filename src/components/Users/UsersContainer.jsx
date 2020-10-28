import React from "react";
import {connect} from "react-redux";
import {
    followT,
    unfollowT,
    loadPage
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UserContainer extends React.Component {

    componentDidMount() {
        this.props.loadPage(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.loadPage(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader />}
            <Users {...this.props} onPageChanged = {this.onPageChanged}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followInProgress: state.usersPage.followInProgress
    }
}

export default compose(
    connect(mapStateToProps, {followT, unfollowT, loadPage}),
)(UserContainer);