import React from "react";
import style from './style.module.css'

function ContainerCards(props) {
  const {children} = props;
  return (
    <main className = {style.mainSection}>
      <div className = {style.containerCards}>
        {children}
      </div>
    </main>
  );
}

export {ContainerCards};