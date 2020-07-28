import React from "react";
import styles from "./Users.module.css";
import Avatar from "../Avatar/Avatar";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import {UserApi} from "../../api/api";

const Users = (props) => {
    const pageCount = Math.ceil(props.totalUserCount / props.pageSize);

    const follow = (uid) => {
        props.toggleIsFollowing(true);
        UserApi.followUser(uid)
            .then(response => {
                if (response == 0) props.follow(uid);
                props.toggleIsFollowing(false);
            });
    }

    const unfollow = (uid) => {
        props.toggleIsFollowing(true);
        UserApi.unfollowUser(uid)
            .then(response => {
                if (response == 0) props.unfollow(uid);
                props.toggleIsFollowing(false);
            });
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <Avatar src={u.photos.small ? u.photos.small : userPhoto}
                                        className={styles.userAvatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button disabled={props.isFollowing} onClick={() => unfollow(u.id)}>unfollow</button>
                                : <button disabled={props.isFollowing} onClick={() => follow(u.id)}>follow</button>}
                        </div>
                    </span>
                <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
            </div>)
        }
        <Pagination pageCount={pageCount} currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}/>
    </div>
}

export default Users;