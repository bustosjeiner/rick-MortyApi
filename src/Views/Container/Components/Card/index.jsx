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
    <div className = {`${style.card} ${gender === 'Male' ? style.cardMale : style.cardFemale}`}>
      <img 
        src = {image}
        alt = {name}
        className = {style.imgCharacter}
      />
      <h2 className = {style.characterName}>{name}</h2>
      <p className = {`${style.status} ${status === 'Alive' ? style.statusAlive : status === 'Dead' ? style.statusDead : style.statusUnknow}`}>{status}</p>
      <p className = {style.characteristics}>{species}</p>
      <p className = {style.characteristics}>{gender}</p>
    </div>
  );
}

export { Card };