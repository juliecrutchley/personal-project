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

        <div className=' col-md-4 col-xs-12 healthLabels-container'>
          <div>
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




          <div className='macro-header col-md-4 col-xs-12'>
            <h5>Macro information</h5>
            <div className='macro-name-container'>
              <div className='macro name sugar'>
                <p>Sugar</p>
              </div>
              <div className='macro name fat'>
                <p>Fat</p>
              </div>
              <div className='macro name calories'>
                <p>Calories</p>
              </div>
              <div className='macro-amount-container'>
                <div className='macro amount sugar'>
                  <p>{`${props.food.sugarActual} g`}</p>
                </div>
                <div className='macro amount fat'>
                  <p>{`${props.food.fatActual} g`}</p>
                </div>
                <div className='macro amount calories'>
                  <p>{props.food.calories}</p>
                </div>
              </div>
            </div>
          </div>


          <div className='exercise-header col-md-4 col-xs-12'>
            <h5>Exercise options to burn this off</h5>
            <div className='exercise-name-container'>
              <div className='exercise running'>
                <p>Running</p>
              </div>
              <div className='exercise mowing'>
                <p>Mowing Lawns</p>
              </div>
              <div className='exercise hacky'>
                <p>Playing Hacky Sack</p>
              </div>
              <div className='exercise-amount-container'>
                <div className='exercise amount running'>
                  <p>{`${running} minutes`}</p>
                </div>
                <div className='exercise amount mowing'>
                  <p>{`${mowing} minutes`}</p>
                </div>
                <div className='exercise amount hacky'>
                  <p>{`${hacky} minutes`}</p>
                </div>
            </div>
            </div>
          </div>


    </div>
  )
}

export default Food
