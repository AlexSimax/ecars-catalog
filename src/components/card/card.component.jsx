import React from "react"
import "../../css/main.css"

export const Card = props => {
  return (
    <div className="card-container">
      <img
        src={`https://raw.githubusercontent.com/AlexSimax/ecarsImg/master/${props.car.pict}.jpg`}
        alt="tesla_3"
        width="250"
        height="235"
      />
      <h2>{props.car.name[0]}</h2>
      <p>Запас хода, WLTP: {props.car.wltp} km</p>
    </div>
  )
}
