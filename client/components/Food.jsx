import React from "react"
import {Link} from 'react-router-dom'
import foodsData from '../../data/foodsData'

const Food = (props) => {
  const name = props.match.params.name
  console.log(name)
  console.log(props)
  // // const profile = (foodsData[id-1])
  // function getProfile(profile) {
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
  // }

}


export default Food






{/* const Food = () => { */}
{/* //   return (
//     <div className="food">
//       <div className="food-profile-container">
//         <div className="food-image">
//           <p>Food name goes here</p>
//           <p>Food pic goes here</p>
//         </div>
//         <div>
//           <p>How much do you think is in this food?</p>
//         </div>
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
// //       </div>
// //     </div>
// //   )
// }

export default Food




// import React from "react"
// import {HashRouter as Router, Route, Link} from "react-router-dom"
//
// import FoodChoices from "./FoodChoices"
// import foodsData from "../../data/foods"
//
// const Food = () => { */}
{/* //   // console.log(foodsData[0])
//   return (
//     <div>
//        <p>Food choices goes here</p>
//     </div>
  // )
  // const {id, name} = match.params
  // const choice = foods.filter(item => item.id === id)[0]
  // console.log(choice)
  // return (
  //   <Router>
  //     <div>
  //       <p>Food goes here</p>
  //       <p>{choice.name}</p>
  //     </div>
  //   </Router>
  // )
// } */}

{/* //
//       <div className="food-profile-container">
//         <div className="food-image">
//           <p>Food name goes here</p>
//           <p>Food pic goes here</p>
//         </div>
//         <div>
//           <p>How much do you think is in this food?</p>
//         </div>
//         <div className="macro-choice-container">
//           <div className="macro-choice sugar">
//             <p>Sugar</p>
//             <p>Guess goes here</p>
//           </div>
//           <div className="macro-choice salt">
//             <p>Salt</p>
//             <p>Guess goes here</p>
//           </div>
//           <div className="macro-choice fat">
//             <p>Fat</p>
//             <p>Guess goes here</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default Food
//
//
//
//




// import React from "react"
//
// const Food = () => { */}
{/* //   return (
//     <div className="food">
//       <div className="food-profile-container">
//         <div className="food-image">
//           <p>Food name goes here</p>
//           <p>Food pic goes here</p>
//         </div>
//         <div>
//           <p>How much do you think is in this food?</p>
//         </div>
//         <div className="macro-choice-container">
//           <div className="macro-choice sugar">
//             <p>Sugar</p>
//             <p>Guess goes here</p>
//           </div>
//           <div className="macro-choice salt">
//             <p>Salt</p>
//             <p>Guess goes here</p>
//           </div>
//           <div className="macro-choice fat">
//             <p>Fat</p>
//             <p>Guess goes here</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// } */}
