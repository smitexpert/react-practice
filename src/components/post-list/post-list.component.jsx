import React from 'react'

import Post from '../post/post-component'

const PostList = ({posts}) => {
    return (
        <div className="container mx-auto flex flex-wrap">
            {posts.map(({id, title, body, userId}) => (
                <Post key={id} id={id} title={title} body={body} userId={userId} />
            ))}
        </div>
    )
}

export default PostList
