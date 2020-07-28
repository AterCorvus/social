import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Avatar src='https://cdn.shopify.com/shopifycloud/hatchful-web/assets/6fcc76cfd1c59f44d43a485167fb3139.png'/>
                {props.profile && props.profile.photos.small && <Avatar src={props.profile.photos.small} />}
                <div className={classes.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;