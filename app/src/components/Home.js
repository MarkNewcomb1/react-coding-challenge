import React from 'react'
import { Link } from 'react-router-dom';
import placeholder from '../assets/placeholder.png';
export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <div className="inside-component">
                <Link to='/series'>
                    <figure>
                        <img src={placeholder} alt="placeholder" />
                        <figcaption>SERIES</figcaption>
                    </figure>
                </Link>
                <Link to='/movies'>
                    <figure>
                        <img src={placeholder} alt="placeholder" />
                        <figcaption>MOVIES</figcaption>
                    </figure>
                </Link>
            </div>
        </div>
    )
}

export default Home;