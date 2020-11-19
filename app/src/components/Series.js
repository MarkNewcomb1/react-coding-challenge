import React from 'react'

export const Series = ({seriesEntries}) => {
    return (
        <div>
            <h1>Series</h1>
            <div className="inside-component movie-and-series">
            {seriesEntries.map((entry) => (
                <div className="card" key={entry.title}>
                    <img src={entry.images['Poster Art'].url} alt={entry.title} />
                    <p>{entry.title}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Series;