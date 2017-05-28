import React from 'react'

const Food = (props) => {
  console.log(props)
  return (
    <div className='food'>
      <div className='food-profile-container'>
        <div className='food-name'>
          <p>{props.food.name}</p>
        </div>
      </div>
      <div className='macro-container'>
        <div className='macro sugar'>
          <p>Sugar</p>
          <p>{`${props.food.sugarActual} g`}</p>
        </div>
        <div className='macro fat'>
          <p>Fat</p>
          <p>{`${props.food.fatActual} g`}</p>
        </div>
        <div className='macro calories'>
          <p>Calories</p>
          <p>{props.food.calories}</p>
        </div>
      </div>
    </div>
  )
}

export default Food
