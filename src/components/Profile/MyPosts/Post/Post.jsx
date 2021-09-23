import React from 'react';
import cl from './Post.module.css';
import postImage from './../../../../img/avatar_been.jpeg';

const Post = (props) => {

    return <div className={cl.item}>
    <img src={postImage}/>        
      <p>{props.message}</p>{props.nameOfUser}
      <div>
        <span>like: {props.likeCounts}</span>/
        <span>dislike: {props.dislikeCounts}</span>
      </div>
      </div>        
}

export default Post;