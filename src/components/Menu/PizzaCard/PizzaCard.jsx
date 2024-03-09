import React from 'react'
import "./PizzaCard.css"
export default function PizzaCard(props) {
  const {info} =  props;
  return (
      <>
      <li key={info?.id} className={`pizza ${info?.soldOut ? "sold-out" : ""}`}>
        <img src={info.photoName} alt={info.name}></img>
        <div>
          <h3>{info?.name}</h3>
          <p>{info?.ingredients}</p>
          <span>{info?.price}</span>
        </div>
      </li>
    </>
  )
}
