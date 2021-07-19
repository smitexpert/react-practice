import React, {useState, useEffect} from 'react'

import { Link, useRouteMatch } from 'react-router-dom';


const Post = ({id, title, body, userId}) => {
    
    let {path, url} = useRouteMatch();

    return (
        <>
        <div className="w-1/4">
            <div className="min-h-6 shadow m-5 pb-2">
                <h1 className="text-lg font-bold p-2 leading-5"><Link to={`${url}/${id}`}>{title}</Link></h1>
                <img src={`https://via.placeholder.com/468x260?text=${title}`} alt="My Title" className="w-full h-auto" />
                <p className="text-base p-2">{ body }</p>
            </div>
        </div>
        </>
    )
}

export default Post
