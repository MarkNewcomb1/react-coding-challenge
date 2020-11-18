import React from 'react'
import {Link} from 'react-router-dom';
export const Header = () => {
    return (
        <div>
            <h1><Link to='/'>DEMO Streaming</Link></h1>
        </div>
    )
}

export default Header;