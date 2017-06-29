import React from 'react'

const Food = (props) => {
  const running = Math.ceil(props.food.calories / 11.4)
  const mowing = Math.ceil(props.food.calories / 7.5)
  const hacky = Math.ceil(props.food.calories / 4.1)
  const healthLabels = props.food.healthLabels
  console.log(healthLabels)
  // .split('_').join(' ')

  return (
    <div className='food col-md-12 col-xs-12'>
      <div className='food-name col-md-12 col-xs-12'>
        <h4>{props.food.name}</h4>
      </div>

      <div className=' col-md-3 col-xs-12 healthLabels-container'>
        <div className='title'>
          <h5>Health Labels</h5>
        </div>
        {healthLabels.map((label) => {
          return (
            <div className='healthLabel'>
              {label.split('_').join(' ')}
            </div>
          )
        })}
      </div>

      <div className='macro-header title col-md-4 col-xs-12'>
        <h5>Macro information</h5>
        <div className='macro-name-container'>
          <div className='macro name sugar'>
            <div className='head'>Sugar</div>
            <div>{`${props.food.sugarActual} g`}</div>
          </div>
          <div className='macro name fat'>
            <div className='head'>Fat</div>
            <div>{`${props.food.fatActual} g`}</div>
          </div>
          <div className='macro name calories'>
            <div className='head'>Calories</div>
            <div>{props.food.calories}</div>
          </div>
        </div>
      </div>

      <div className='exercise-header title col-md-4 col-xs-12'>
        <h5>Exercise options to burn this off</h5>
        <div className='exercise-name-container'>
          <div className='exercise running'>
            <div className='head'>Running</div>
            <div>{`${running} minutes`}</div>
          </div>
          <div className='exercise mowing'>
            <div className='head'>Mowing Lawns</div>
            <div>{`${mowing} minutes`}</div>
          </div>
          <div className='exercise hacky'>
            <div className='head'>Playing Hacky Sack</div>
            <div>{`${hacky} minutes`}</div>
          </div>
        </div>
      </div>
      <div className='extra col-md-8 col-xs-12 more'>
        <p>More stuff is supposed to go here...</p>
      </div>
    </div>
  )
}

export default Food
