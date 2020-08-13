import React from "react";
import classes from "./ProfileInfo.module.css";
import Avatar from "../../Avatar/Avatar";
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let contacts = Object.values(props.profile.contacts).filter(el => el).map(el => <div>{el + ';'}</div>);

    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg' />*/}
            {/*</div>*/}
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <ProfileStatus status={"Hello my friends"}/>
                <Avatar src={props.profile.lookingForAJob ? 'https://www.kathleenlovesyoga.com/wp-content/uploads/2019/07/Hire-Me.jpg'
                : 'https://thumbs.dreamstime.com/b/hand-drawn-quote-made-ink-brush-lettering-design-element-says-not-interested-hand-drawn-quote-made-ink-brush-135032247.jpg'}/>
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>Contacts: </div>
                {contacts}
            </div>
        </div>
    );
};

export default ProfileInfo;