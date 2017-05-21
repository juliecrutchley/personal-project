import React from "react"

import ActualCalories from "./ActualCalories"
import ActualExercise from "./ActualExercise"

const Actual = () => {
  return (
    <div className="actual">
      <div className="actual-container">
        <div className="actual-header">
          <p>This is how much there actually is</p>
        </div>
        <div className="macro-actual-container">
          <div className="macro sugar">
            <p>Sugar</p>
            <p>5 teaspoons</p>
          </div>
          <div className="macro salt">
            <p>Salt</p>
            <p>6 teaspoons</p>
          </div>
          <div className="macro fat">
            <p>Fat</p>
            <p>10 teaspoons</p>
          </div>
        </div>
      </div>
      <ActualCalories />
      <ActualExercise />
    </div>
  )
}

export default Actual
