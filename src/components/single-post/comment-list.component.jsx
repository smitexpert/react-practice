import React from 'react';

import Comment from './comment.component';

const CommentList = ({comments}) => {
    return (
        <div className="w-2/3 m-auto">
            <h4 className="text-lg text-black font-bold">Comments</h4>
            {comments.map(({body, name, userId, id}) => (
                <div key={id} className="w-100 my-2 shadow p-5">
                    <p className="text-black font-medium">{body}</p>
                    <p className="m-0 text-indigo-500">{name}</p>
                </div>
            ))}
        </div>
    );
};

export default CommentList;