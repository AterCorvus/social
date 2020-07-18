import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalUserCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users_reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UserContainer extends React.Component {

    componentDidMount() {
        let res = this.loadPage(this.props.currentPage);
        res.then(response => {
            this.props.setTotalUserCount(response.data.totalCount)
        });
    }

    loadPage = (currentPage) => {
        this.props.setUsers([]);
        this.props.toggleIsFetching(true);
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items)
                return response;
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.loadPage(pageNumber);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   onPageChanged={this.onPageChanged}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, unfollow, setUsers, setCurrentPage,
    setTotalUserCount, toggleIsFetching})(UserContainer);