import React from 'react'

import { Link } from 'react-router-dom'

const Navigation = ({className, navigation}) => {
    return (
        <div className={className}>
            <ul className="flex justify-end mx-4 text-white">
                {navigation.map(({name, url}) => (
                    <li key={name} className="p-2"><Link to={url}>{name}</Link></li>
                ))}
            </ul>
        </div>
    )
}

export default Navigation
