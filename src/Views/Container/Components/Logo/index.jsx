import React from "react";
import style from './style.module.css'

function Logo() {
  return (
    <a href = {"/"}>
      <img
        className = {style.logo} 
        src = {'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png'} 
        alt = {'Logo Rick and Morty'} />
    </a>
  );
}

export {Logo};