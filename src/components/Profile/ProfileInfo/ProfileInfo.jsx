
import React from 'react';
import userPhoto from '../../../assets/images/user.png'
import profileInfoCss from './ProfileInfo.module.css';
import Preloader from '../../Common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={profileInfoCss.profileInfo}>
                <div className={profileInfoCss.img}>
                    <img src='https://geniusmarketing.me/wp-content/uploads/2017/08/header-2.jpg' />
                </div>
                <div className={profileInfoCss.descriptionBlock}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} className={profileInfoCss.ava} />
                    <div className={profileInfoCss.fullName}>
                        {props.profile.fullName}
                    </div>
                    <div className={profileInfoCss.aboutMe}>
                        {props.profile.aboutMe}
                    </div>
                    <div className={profileInfoCss.contacts}>
                        <div>
                            facebook:  {props.profile.contacts.facebook != null ? props.profile.contacts.facebook : '-'}
                        </div>
                        <div>
                            website:  {props.profile.contacts.website != null ? props.profile.contacts.website : '-'}
                        </div>
                        <div>
                            vk:  {props.profile.contacts.vk != null ? props.profile.contacts.vk : '-'}
                        </div>
                        <div>
                            twitter:  {props.profile.contacts.twitter != null ? props.profile.contacts.twitter : '-'}
                        </div>
                        instagram:  {props.profile.contacts.instagram != null ? props.profile.contacts.instagram : '-'}
                        <div>
                            youtube:  {props.profile.contacts.youtube != null ? props.profile.contacts.youtube : '-'}
                        </div>
                        <div>
                            github:  {props.profile.contacts.github != null ? props.profile.contacts.github : '-'}
                        </div>
                        <div>
                            mainLink:  {props.profile.contacts.mainLink != null ? props.profile.contacts.matlink : '-'}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default ProfileInfo;