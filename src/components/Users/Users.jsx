import React from "react";
import styles from "./Users.module.css";
import Avatar from "../Avatar/Avatar";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const Users = (props) => {
    const pageCount = Math.ceil(props.totalUserCount / props.pageSize);

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <Avatar src={u.photos.small != null ? u.photos.small : userPhoto}
                                        className={styles.userAvatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>follow</button>}
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
                    onPageChanged={props.onPageChanged} />
    </div>
}

export default Users;