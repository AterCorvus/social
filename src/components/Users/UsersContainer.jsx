import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    toggleFollowInProgress
} from "../../redux/users_reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {UserApi} from "../../api/api";

class UserContainer extends React.Component {

    componentDidMount() {
        let res = this.loadPage(this.props.currentPage);
        res.then(data => {
            this.props.setTotalUserCount(data.totalCount)
        });
    }

    loadPage = (currentPage) => {
        this.props.setUsers([]);
        this.props.toggleIsFetching(true);
        return UserApi.getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            return data;
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.loadPage(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader />}
            <Users {...this.props}/>
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

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage,
    setTotalUserCount, toggleIsFetching, toggleFollowInProgress
})(UserContainer);