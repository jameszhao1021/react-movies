import React from "react";
import { movies } from "../data";
import MovieCard from "../components/MovieCard";
 

function MoviesListPage(){
const movieCards = movies.map((movie, index)=>(
   <MovieCard movie={movie} key={index} />
))
    return (
        <>
        <h1>MoviesListPage</h1>
        {movieCards}
        </>
    )
}


export default MoviesListPage