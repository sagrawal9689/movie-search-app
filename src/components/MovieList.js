import React from 'react'

const MovieList=(props)=> 
{
    const movies= props.movies.map((movie)=>{

        return (<div>{movie.l}</div>)
    })
    return (
        <div>{movies}</div>
    )

}

export default MovieList