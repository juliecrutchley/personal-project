import React from "react"
import Header from "./Header"
import Test from "./Test"
import FoodChoices from "./FoodChoices"
import Food from "./Food"
import Actual from "./Actual"

const App = () => {
  return (
    <div className="app">
      <Header />
      <FoodChoices />
      <Food />
      <Actual />
    </div>
  )
}

export default App
