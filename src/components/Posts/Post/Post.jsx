import React from 'react';
import '../posts.css';

const Post = ({ post }) => {
    return (
        <div className='card' >
            <div className='card-title'>
                {post.title}
            </div>
            <div className='card-text'>
                {post.body}
            </div>
            <div className='card-footer'>
                {post.authorName}
            </div>
        </div >
    );
}

export default Post;