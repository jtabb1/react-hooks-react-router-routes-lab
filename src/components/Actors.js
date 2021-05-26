import React from "react";
import { actors } from "../data";
import { v4 as uuidv4 } from 'uuid';

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map( ar =>(
        <div key={uuidv4()}>
          <h2>{ar.name}</h2>
          <ul>
          {ar.movies.map( me=>(
            <li key={uuidv4()}>{me}</li>
          ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
