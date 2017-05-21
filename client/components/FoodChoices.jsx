import React from "react"

const FoodChoices = () => {
  return (
    <div className="food-choices">
      <div className="food-choices-header">
        <p>Choose a food</p>
      </div>
      <div className="food-choices-container">
        <div className="food-choice">
          <p>Big Mac</p>
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
