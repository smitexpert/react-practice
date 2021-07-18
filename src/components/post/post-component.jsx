import React, {useState, useEffect} from 'react'

import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';


const Post = ({id, title, body, userId}) => {
    
    let {path, url} = useRouteMatch();

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => setUser(user));
    }, [])

    return (
        <>
        <div className="w-1/4">
            <div className="min-h-6 shadow m-5 pb-2">
                <h1 className="text-lg font-bold pt-2 px-2"><Link to={`${url}/${id}`}>{title}</Link></h1>
                <p className="m-0 px-2 py-0">{user.name}</p>
                <img src={`https://via.placeholder.com/468x260?text=${title}`} alt="My Title" className="w-full h-auto" />
                <p className="text-base p-2">{ body }</p>
            </div>
        </div>
        </>
    )
}

export default Post
