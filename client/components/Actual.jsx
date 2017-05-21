import React from "react"

import ActualCalories from "./ActualCalories"
import ActualExercise from "./ActualExercise"

const Result = () => {
  return (
    <div className="actual">
      <div className="actual-container">
        <div className="actual-header">
          <p>This is how much</p>
        </div>
        <div className="macro-actual-container">
          <div className="macro-actual sugar">
            <p>Sugar</p>
            <p>Actual goes here</p>
          </div>
          <div className="macro-actual salt">
            <p>Salt</p>
            <p>Actual goes here</p>
          </div>
          <div className="macro-actual fat">
            <p>Fat</p>
            <p>Actual goes here</p>
          </div>
        </div>
      </div>
      <ActualCalories />
      <ActualExercise />
    </div>
  )
}

export default Result
