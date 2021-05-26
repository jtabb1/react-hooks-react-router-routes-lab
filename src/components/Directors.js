import React from "react";
import { directors } from "../data";
import { v4 as uuidv4 } from 'uuid';

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map( dr=>(
        <div key={uuidv4()}>
          <h2>{dr.name}</h2>
          <ul>
          {dr.movies.map( me=>(
            <li key={uuidv4()}>{me}</li>
          ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Directors;
