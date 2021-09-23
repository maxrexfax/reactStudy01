import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import cl from './Profile.module.css';

const Profile = () => {
    return (
      <div>
          <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>
          </div>
          <div className={cl.profileContent}>
            <div>
              ava + description
            </div>
            <MyPosts data01="Test data from Profile to MyPosts" />
          </div>
      </div>
    )
}

export default Profile;