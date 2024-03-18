import React from "react";
import { useParams } from 'react-router-dom';
import { movies } from "../data";

function MovieDetailPage(){
  const {movieName} = useParams()
 const movie =  movies.find(movie=>(movie.title == movieName))
    return (
        <>
        <h1>MovieDetailPage</h1>
        <img src={movie.posterPath}></img>
        <p>Movie Name: {movie.title}</p>
        <p>Release Date: {movie.releaseDate}</p>
        <p>Cast: {movie.cast.join(', ')}</p>
        
        </>
    )
}


export default MovieDetailPage