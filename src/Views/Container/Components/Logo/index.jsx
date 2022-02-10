import React from "react";
import style from './style.module.css'

function Logo() {
  return (
    <a href = {"/"}>
      <img
        className = {style.img} 
        src = {'https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png'} 
        alt = {'Logo Rick and Morty'} />
    </a>
  );
}

export {Logo};