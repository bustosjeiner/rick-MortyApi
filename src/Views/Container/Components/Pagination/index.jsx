import React from "react";
import style from './style.module.css'

function Pagination(props) {
  const {children} = props;
  
  return (
    <div className = {style.containerButtons}>
      {children}
    </div>
  );
}

export {Pagination};