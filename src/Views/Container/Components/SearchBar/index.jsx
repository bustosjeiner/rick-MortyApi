import React from "react";
import style from './style.module.css'

function SearchBar(props) {

  const {
    text, 
    setText,
  } = props;

  const search = (e) => {
    setText(e.target.value);
  }

  return (
    <div className = {style.containerSearchBar}>
      <input 
        type = 'text' 
        placeholder= "Type a name"
        value = {text}
        onChange = {search}
        className = {style.searchBar}
      />
    </div>
  );
}

export {SearchBar};