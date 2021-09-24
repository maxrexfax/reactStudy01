import React from 'react';
import Post from './Post/Post';

import cl from './MyPosts.module.css';

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi there!', nameOfUser: "Dimych", likeCounts:"15", dislikeCounts:"1"},
        {id: 2, message: 'Hi yo!', nameOfUser: "Sveta", likeCounts:"25", dislikeCounts:"3"},
        {id: 3, message: 'Hi now!', nameOfUser: "Katya", likeCounts:"35", dislikeCounts:"1"},
        {id: 4, message: 'Hallo', nameOfUser: "Lina", likeCounts:"45", dislikeCounts:"3"},
        {id: 5, message: 'Hi by', nameOfUser: "Lena", likeCounts:"11", dislikeCounts:"2"},
    ];

    let postElements = postData.map(post => <Post id={post.id} message={post.message} nameOfUser={post.nameOfUser} likeCounts={post.likeCounts} dislikeCounts={post.dislikeCounts}/>);

    return <div className={cl.postsBlock}>
        <div>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button type="submit">Add post</button>
                </div>
                <p> {props.data01}</p>
            </div>
        </div>
        <div className={cl.posts}>
            {postElements}
        </div>
    </div>

}

export default MyPosts;