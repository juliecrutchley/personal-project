import React from 'react'

const Food = (props) => {
  console.log(props)
  const running = Math.ceil(props.food.calories / 11.4)
  const mowing = Math.ceil(props.food.calories / 7.5)
  const hacky = Math.ceil(props.food.calories / 4.1)
  return (
    <div className='food'>
      <div className='food-profile-container'>
        <div className='food-name'>
          <h3>{props.food.name}</h3>
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
      <div className='exercise-header-container'>
        <div className='exercise-header'>
          <p>This is how long it would take to burn this off</p>
        </div>
      </div>
      <div className='exercise-container'>
        <div className='exercise running'>
          <p>Running</p>
          <p>{`${running} minutes`}</p>
        </div>
        <div className='exercise mowing'>
          <p>Mowing Lawns</p>
          <p>{`${mowing} minutes`}</p>
        </div>
        <div className='exercise hacky'>
          <p>Playing Hacky Sack</p>
          <p>{`${hacky} minutes`}</p>
        </div>
      </div>
    </div>
  )
}

export default Food
