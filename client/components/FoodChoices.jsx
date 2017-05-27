import React from 'react'
import {Link} from 'react-router-dom'
import foodsData from '../../data/foodsData'

function FoodChoices () {
  return (
    <div className='food-choices-container'>
      {foodsData.map((food) => {
        return (
          <div className='food-choice'>
            <Link to={'/' + 'food' + '/' + Number(food.id)}>{food.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default FoodChoices
