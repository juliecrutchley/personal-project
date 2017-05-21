import React from "react"

const Food = () => {
  return (
    <div className="food">
      <div className="food-profile-container">
        <div className="food-image">
          <p>Food name goes here</p>
          <p>Food pic goes here</p>
        </div>
        <div>
          <p>How much do you think is in this food?</p>
        </div>
        <div className="macro-choice-container">
          <div className="macro-choice sugar">
            <p>Sugar</p>
            <p>Guess goes here</p>
          </div>
          <div className="macro-choice salt">
            <p>Salt</p>
            <p>Guess goes here</p>
          </div>
          <div className="macro-choice fat">
            <p>Fat</p>
            <p>Guess goes here</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Food
