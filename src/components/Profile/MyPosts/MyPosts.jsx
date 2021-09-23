import React from 'react';
import Post from './Post/Post';

import cl from './MyPosts.module.css';

const MyPosts = (props) => {
    return <div className={cl.content}>
    
      <div>
        My posts
        <div>
          <input type="text"/>
          <button type="submit">Add post</button>
          <p> {props.data01}</p>
        </div>
      </div>
      <div className={cl.posts}>
        <Post message='Hi, how are you?' nameOfUser="Vasya" likeCounts="15" dislikeCounts="1"/>
        <Post message="It's my first post" nameOfUser="Vasya1" likeCounts="35" dislikeCounts="3"/>
      </div>
    </div>

}

export default MyPosts;