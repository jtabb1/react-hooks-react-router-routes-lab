import React from "react";
import { movies } from "../data";
import { v4 as uuidv4 } from 'uuid';

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map( me=>(
        <div key={uuidv4()}>
          <h2>{me.title}</h2>
          <p>Runtime: {me.time} min.</p>
          <ul>
          {me.genres.map( ge=>(
            <li key={uuidv4()}>{ge}</li>
          ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
