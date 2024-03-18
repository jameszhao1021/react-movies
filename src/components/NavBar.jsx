import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){

    return (
      
        <ul>
            <li>
                <Link to="/">Movies List</Link>
            </li>
            <li>
                <Link to="/actors">Actors List</Link>
            </li>
        </ul>
        
    )
}


export default NavBar