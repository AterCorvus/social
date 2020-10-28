import React from "react";
import classes from "./ProfileInfo.module.css";
import Avatar from "../../Avatar/Avatar";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    let contacts = Object.values(props.profile.contacts).filter(el => el).map(el => <div>{el + ';'}</div>);

    return (
        <div>
            <div className={classes.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <div>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
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