import React from "react"
import {Link} from 'react-router-dom'
import foodsData from '../../data/foodsData'

const Food = (props) => {
  const name = props.match.params.name
    return (
      <div className="food">
        <div className="food-profile-container">
          <div className="food-image">
            <p>Food name goes here</p>
            <p>Food pic goes here</p>
          </div>
        </div>
        <div>
          <p>How much do you think is in this food?</p>
        </div>
        <div className="macro-choice-container">
          <div className="macro sugar">
            <p>Sugar</p>
            <p>Guess goes here</p>
          </div>
          <div className="macro salt">
            <p>Salt</p>
            <p>Guess goes here</p>
          </div>
          <div className="macro fat">
            <p>Fat</p>
            <p>Guess goes here</p>
          </div>
        </div>
        <div>
          <Link to={"/food/actual"}>Submit</Link>
        </div>
      </div>
    )
}

export default Food
