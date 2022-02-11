import React from 'react';
import style from './style.module.css'

function PagButton(props) {
  const {
    onClick,
    value,
  } = props;
  return (
    <button 
      type = 'button' 
      onClick = {onClick}
      className = {style.button}
    >
      {value}
    </button>
  );
};

export {PagButton};
