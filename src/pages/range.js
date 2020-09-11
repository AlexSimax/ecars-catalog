import React, { Component } from "react"
import "../css/main.css"
import Header from "../components/Header/Header"
import TeslaBattery from "../containers/TeslaBattery"
import Footer from "../components/Footer/Footer"

const counterDefaultVal = {
  speed: {
    title: "Speed",
    titleRus: "Скорость",
    unit: "км/ч",
    step: 10,
    min: 70,
    max: 120,
  },
  temperature: {
    title: "Outside Temperature",
    titleRus: "Внешняя температура",
    unit: "C°",
    step: 10,
    min: -10,
    max: 40,
  },
}
// Temperature in Celcius

export default class range extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TeslaBattery counterDefaultVal={counterDefaultVal} />
        <div className="footerMain">
          <div className="year">{new Date().getFullYear()} </div>
          <p className="mail">
            Разработано&nbsp;
            <a
              href="mailto:eurock3@gmail.com?Subject=%20ecars.netlify.app/"
              target="_top"
            >
              <i>AlexSimax</i>
            </a>
          </p>
        </div>
      </div>
    )
  }
}
