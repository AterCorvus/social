import React from "react";
import styles from "./Users.module.css";
import Avatar from "../Avatar/Avatar";
import userPhoto from "../../assets/img/user.png";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize);
    pageCount = pageCount > 10 ? 10 : pageCount;

    let pages = [];
    for (let i = 1; i <= pageCount; i++) pages.push(i);

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => props.onPageChanged(p)}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <Avatar src={u.photos.small != null ? u.photos.small : userPhoto}
                                    className={styles.userAvatar}/>
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
    </div>
}

export default Users;