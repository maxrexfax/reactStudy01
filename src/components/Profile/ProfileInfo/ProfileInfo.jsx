import React from 'react';
import profileImage from './../../../img/Landscape-Color.jpg';
import cl from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={profileImage}/>
            </div>

            <div className={cl.descriptionBlock}>
                ava + description
            </div>
        </div>
)
}

export default ProfileInfo;