import React from 'react';
import profileInfoCss from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={profileInfoCss.profileInfo}>
                <div className={profileInfoCss.img}>
                    <img src='https://geniusmarketing.me/wp-content/uploads/2017/08/header-2.jpg' />
                </div>
                <div className={profileInfoCss.descriptionBlock}>
                    <img src='http://s01.riotpixels.net/data/cb/4c/cb4c5508-7454-43e6-ac16-748ba5b12e8b.png' />
                    + description
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo;