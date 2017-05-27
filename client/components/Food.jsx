import React from 'react'

const Food = (props) => {
  return (
    <div className='food'>
      <div className='food-profile-container'>
        <div className='food-image'>
          <p>Food name goes here</p>
          <p>Food pic goes here</p>
        </div>
      </div>
      <div>
        <p>How much do you think is in this food?</p>
      </div>
      <div className='macro-choice-container'>
        <div className='macro sugar'>
          <p>Sugar</p>
          <p>Guess goes here</p>
        </div>
        <div className='macro salt'>
          <p>Salt</p>
          <p>Guess goes here</p>
        </div>
        <div className='macro fat'>
          <p>Fat</p>
          <p>Guess goes here</p>
        </div>
      </div>
      <div>
        <p>Submit</p>
      </div>
    </div>
  )
}

export default Food
