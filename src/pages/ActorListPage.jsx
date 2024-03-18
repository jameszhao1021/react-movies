import React from "react";
import { movies } from "../data";
import ActorCard from "../components/ActorCard";
function ActorListPage(){
    const allActors = [].concat(...movies.map(movie => movie.cast));console.log(allActors)
    const actorsSet = new Set(allActors);
    const actorUniqueArray = Array.from(actorsSet)
    const actorCards = actorUniqueArray.map((actor, index)=>(
        <ActorCard key={index} actor={actor}/>
    ))
    return (
        <>
        <h1>ActorListPage</h1>
        {actorCards}
       </>
    )
}


export default ActorListPage