import React from 'react'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>
                <span><Link to='/series'>Series</Link></span>&nbsp;
                <span><Link to='/movies'>Movies</Link></span>
            </p>
        </div>
    )
}

export default Home;