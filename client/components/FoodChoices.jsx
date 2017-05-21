import React from "react"
import {Link} from 'react-router-dom'

const FoodChoices = () => {
  return (
    <div className="food-choices">
      <div className="food-choices-header">
        <p>Choose a food</p>
      </div>
      <div className="food-choices-container">
        <div className="food-choice">
          <Link to={"/food/1"}>Big Mac</Link>
        </div>
        <div className="food-choice">
          <p>Snickers Bar</p>
        </div>
        <div className="food-choice">
          <p>Milkshake</p>
        </div>
        <div className="food-choice">
          <p>Pizza</p>
        </div>
      </div>
    </div>
  )
}

export default FoodChoices
