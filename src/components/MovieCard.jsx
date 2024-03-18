import React from "react";
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${encodeURIComponent(movie.title)}`} >
       <div className="card" style={{backgroundImage: `url(${movie.posterPath})`, backgroundSize: 'cover'}}>
      <h2>{movie.title}</h2>
      <h2>{movie.releaseDate}</h2>
      </div>
    </Link>
  );
}

export default MovieCard;

