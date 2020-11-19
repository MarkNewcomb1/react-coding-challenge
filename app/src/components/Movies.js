import React from 'react'

export const Movies = ({movieEntries}) => {
    return (
        <div>
            <h1>Movies</h1>
            <div className="inside-component movie-and-series">
            {movieEntries.map((entry) => (
                <div className="card" key={entry.title}>
                    <img src={entry.images['Poster Art'].url} alt={entry.title} />
                    <p>{entry.title}</p>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Movies;