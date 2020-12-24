import React from 'react'

const MovieList=(props)=> 
{
    const movies= props.movies.map((movie)=>{

        return (<>
                        <div className="movie-block">
                        <div className="left-block">
                            <img alt="movie image" src={movie.i? movie.i.imageUrl: ""}/>
                        </div>
                        <div className="right-block">
                            <div>NAME: {movie.l}</div>
                            <div>RANK: {movie.rank}</div>
                            <div>YEAR: {movie.y}</div>
                        </div >
                        </div>
                        </>)
    })
    return (
        <div>{movies}</div>
    )

}

export default MovieList