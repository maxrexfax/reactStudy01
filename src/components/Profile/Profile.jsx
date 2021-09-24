import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>

            <MyPosts data01="Test data from Profile to MyPosts"/>
        </div>
    )
}

export default Profile;