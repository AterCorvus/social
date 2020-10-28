import React from "react";
import styles from "../Users/Users.module.css";

const Pagination = (props) => {
    let pages = [];
    let startPage = props.currentPage - 5;
    if(startPage + 9 > props.pageCount)
        startPage = startPage - (startPage -  props.pageCount + 9);
    if(startPage <= 0)
        startPage = 1;
    let lastPage = startPage + 9;
    if(lastPage > props.pageCount)
        lastPage =  props.pageCount;
    for (let i = startPage; i <= lastPage; i++) pages.push(i);

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && styles.selectedPage}
                         onClick={(e) => props.onPageChanged(p)}>{p}</span>
        })}
    </div>
}

export default Pagination;