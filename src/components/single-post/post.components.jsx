import React from 'react';

const Post = ({post, user}) => (
    <>
    <div className="w-100">
        <img className="w-100 h-auto" style={{width: '100%'}} src={`https://via.placeholder.com/800x260?text=${post.title}`} alt="" />
    </div>
    <div className="w-2/3 m-auto">
        <p className="m-0 text-indigo-500">{user.name}</p>
        <h1 className="text-3xl font-bold text-indigo-900 leading-8">{post.title}</h1>
        <div className="my-8">
            <p className="text-black">{post.body}</p>
        </div>
    </div>
    </>
);

export default Post;