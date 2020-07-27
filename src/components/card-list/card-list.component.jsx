import React from "react"
import { Card } from "../card/card.component"
import "../../css/main.css"

export const CardList = props => {
  return (
    <>
      <div className="card-list">
        {props.cars.map(car => (
          <>
            <Card key={car.id} car={car}></Card>
          </>
        ))}
      </div>
    </>
  )
}
