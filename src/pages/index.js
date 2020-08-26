import React, { Component } from "react"
// import { graphql } from "gatsby"
import "../css/main.css"
import { CardList } from "../components/card-list/card-list.component"
import { SearchBox } from "../components/search-box/search-box.component"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      cars: [
        {
          name: ["Tesla Model S", "Тесла Модель С", "model S", "модель С"],
          id: "Tesla Model S",
          pict: "tesla_model_s",
          wltp: 610,
        },
        {
          name: ["Tesla Model 3", "Тесла Модель 3"],
          id: "Tesla Model 3",
          pict: "tesla_model_3",
          wltp: 560,
        },
        {
          name: ["Tesla Model X", "Тесла Модель Икс"],
          id: "Tesla Model X",
          pict: "tesla_model_x",
          wltp: 507,
        },
        {
          name: ["Tesla Model Y", "Тесла Модель Y"],
          id: "Tesla Model Y",
          pict: "tesla_model_y",
          wltp: 600,
        },
        {
          name: ["Nissan Leaf", "Ниссан Лиф"],
          id: "Nissan Leaf",
          pict: "nissan_leaf",
          wltp: 385,
        },
        {
          name: ["Renault Zoe", "Рено Зое"],
          id: "Renault Zoe",
          pict: "renault_zoe",
          wltp: 380,
        },
        {
          name: ["BMW i3", "БМВ и3"],
          id: "BMW i3",
          pict: "bmw_i3",
          wltp: 310,
        },
        {
          name: ["Hyundai Ioniq", "Хундай Ионик", "Хундай Айоник"],
          id: "Hyundai Ioniq",
          pict: "hyundai_ioniq_electric",
          wltp: 311,
        },
        {
          name: ["Hyundai Kona", "Хундай Кона"],
          id: "Hyundai Kona",
          pict: "hyundai_kona_electric",
          wltp: 480,
        },
        {
          name: ["KIA e-Niro", "Киа е-Ниро"],
          id: "KIA e-Niro",
          pict: "kia_e-niro",
          wltp: 455,
        },
        {
          name: ["Opel Corsa-e", "Опель Корса-е"],
          id: "Opel Corsa-e",
          pict: "opel_corsa-e",
          wltp: 337,
        },
        {
          name: ["Porsche Taycan", "Порше Тайкан"],
          id: "Porsche Taycan",
          pict: "porsche_taycan",
          wltp: 450,
        },
        {
          name: ["Volkswagen e-Golf", "Фольксваген е-Гольф"],
          id: "Volkswagen e-Golf",
          pict: "volkswagen_e-golf",
          wltp: 222,
        },
      ],
      searchField: "",
    }
    // this.handleChange = this.handleChange.bind(this); // Надо, если применить не arrow function
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { cars, searchField } = this.state
    const filteredCars = cars.filter(car =>
      car.name.join().toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Каталог Электромобилей</h1>
        <SearchBox
          placeholder="марка или модель"
          changeHandler={this.handleChange}
        ></SearchBox>
        <CardList cars={filteredCars} />
      </div>
    )
  }
}

// ...GatsbyImageSharpFluid
