import React from 'react';

const Post = ({ posts, loading }) => {
    if(loading) {
        return<h2>Loading...</h2>
    }
    return (
        <ul className="lists">
            {posts.map(post => (
                <li className= 'list-item' key={post.id} >
                    {post.title}
                </li>
            ))}
        </ul>
    );
};

export default Post;