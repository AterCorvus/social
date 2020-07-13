import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../../redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";

class UserContainer extends React.Component {

    componentDidMount() {
        let res = this.loadPage(this.props.currentPage);
        res.then(response => {
            this.props.setTotalUserCount(response.data.totalCount)
        });
    }

    loadPage = (currentPage) => {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                return response;
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.loadPage(pageNumber);
    }

    render() {
        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      onPageChanged={this.onPageChanged}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch (followAC(userId)),
        unfollow: (userId) => dispatch (unfollowAC(userId)),
        setUsers: (users) => dispatch (setUsersAC(users)),
        setCurrentPage: (page) => dispatch (setCurrentPageAC(page)),
        setTotalUserCount: (count) => dispatch (setTotalUserCountAC(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);