import React from 'react'


import PostList from '../components/post-list/post-list.component';

const Blog = ({posts}) => {
    return (
        <>
            <PostList posts={posts} />
        </>
    )
}

export default Blog
