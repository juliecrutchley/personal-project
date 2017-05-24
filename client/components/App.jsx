import React from "react"
import {HashRouter as Router, Route} from 'react-router-dom'

import Header from "./Header"
import Start from "./Start"
import FoodChoices from "./FoodChoices"
import Food from "./Food"
import Actual from "./Actual"

const App = () => {
  return (
    <Router>
      <div className="app">
        <Route path ="/" component={Header} />
        <Route exact path="/" component={Start} />
        <Route path="/choose" component={FoodChoices} />
        <Route path="/food/:id" component={Food} />
        <Route path="/food/actual" component={Actual} />
      </div>
    </Router>
  )
}

export default App





// import React from "react"
// import {HashRouter as Router, Route} from "react-router-dom"
//
// import Header from "./Header"
// import Test from "./Test"
// import FoodChoices from "./FoodChoices"
// import Food from "./Food"
// import Actual from "./Actual"
//
// const App = () => {
//   return (
//     <Router>
//       <div className="app container">
//         <Route path = "/" component={Header} />
//         <div className="content">
//           <Route exact path = "/" component={FoodChoices} />
//           <Route path = "/food/:id" component={Food} />
//         </div>
//       </div>
//     </Router>
//   )
// }
//
// export default App
