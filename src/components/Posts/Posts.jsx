import React from 'react';
import Post from './Post/Post';
import './posts.css';

const Posts = (props) => {

    let postsElements = props.posts.map(p => <Post post={p} key={p.id} />);

    return (
        <div className='card-columns'> 
            {postsElements}
        </div>);
}

export default Posts;