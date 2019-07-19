import React from 'react';
import styled from 'styled-components';

const Cards = styled.div`
  width: 300px;
  background: rgba(0,0,0,.5);
  border-radius: 15px;
  margin-bottom: 20px;
  color: white;

`


export const Card = (props) => {
    return (
      <Cards>
        <h2>{props.name}</h2>
        <p>Height: {props.height}</p>
        <p>Mass: {props.mass}</p>
        <p>Hair Color: {props.hair_color}</p>
        <p>Skin Color: {props.skin_color}</p>
        <p>Gender: {props.gender}</p>
        <p>Birth Year: {props.birth_year}</p>
        
      </Cards>
    );
  };