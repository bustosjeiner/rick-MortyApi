import React from 'react';
import style from './style.module.css'

function Card (props) {
  const {
    name,
    status,
    species,
    gender,
    image,
  } = props;

  return (
    <div>
      <img 
        src = {image}
        alt = {name}
      />
      <h2>{name}</h2>
      <p>{status}</p>
      <p>{species}</p>
      <p>{gender}</p>
    </div>
  );
}

export { Card };