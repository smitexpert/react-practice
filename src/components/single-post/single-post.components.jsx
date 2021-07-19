import React from 'react';

import Post from './post.components';
import CommentList from './comment-list.component';

const SinglePost = ({ data }) => {
    
    const {post, user, comments} = data;
    console.log(comments.length);
    return (
        <div className="container m-auto">
            <Post post={post} user={user} />
            {(comments.length > 0) ? <CommentList comments={comments} /> : ''}            
        </div>
    );
}

export default SinglePost;