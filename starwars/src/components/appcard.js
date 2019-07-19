import React from 'react';
import { useState, useEffect } from 'react';




export const Card = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Height: {props.height}</p>
        <p>Mass: {props.mass}</p>
        <p>Hair Color: {props.hair_color}</p>
        <p>Skin Color: {props.skin_color}</p>
        <p>Gender: {props.gender}</p>
        <p>Birth Year: {props.birth_year}</p>
        
      </div>
    );
  };