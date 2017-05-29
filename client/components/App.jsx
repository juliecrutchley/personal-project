import React from 'react'
// import {HashRouter as Router} from 'react-router-dom'
import Header from './Header'
// import Start from './Start'
import MainImage from './MainImage'
import SearchForm from './SearchForm'
import FoodChoices from './FoodChoices'
import Food from './Food'
import SearchAgain from './SearchAgain'

// import Actual from './Actual'
import {getFoodFromApi} from '../../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // apiLoaded: false,
      displayHeader: true,
      // displayStart: true
      displaySearchForm: true,
      displayMainImage: true,
      displayFoodChoices: true,
      displaySearchAgain: false,
      displayFood: false,
      // displayActual: false,
      food: {
        sugarGuess: '',
        saltGuess: '',
        fatGuess: '',
        sugarActual: '',
        saltActual: '',
        fatActual: '',
        calories: ''
      }
    }
    this.handleSearchFormClick = this.handleSearchFormClick.bind(this)
    this.handleSearchAgainClick = this.handleSearchAgainClick.bind(this)
  }

  handleSearchFormClick (searchTerm) {
    getFoodFromApi(searchTerm, (err, res) => {
      if (err) return err
      this.setState({
        displayHeader: true,
        displaySearchForm: false,
        displayMainImage: false,
        displayFoodChoices: false,
        displaySearchAgain: true,
        displayFood: true,
        food: {
          name: res.ingredients[0].parsed[0].food,
          sugarGuess: '',
          saltGuess: '',
          fatGuess: '',
          sugarActual: Math.ceil(res.totalNutrients.SUGAR.quantity),
          saltActual: Math.ceil(res.totalNutrients.NA.quantity),
          fatActual: Math.ceil(res.totalNutrients.FAT.quantity),
          calories: Math.ceil(res.calories)
        }
      })
    })
  }

  handleSearchAgainClick () {
    this.setState({
      displayHeader: true,
      displaySearchForm: true,
      displayMainImage: true,
      displayFoodChoices: true,
      displaySearchAgain: false,
      displayFood: false,
      food: {
        name: '',
        sugarGuess: '',
        saltGuess: '',
        fatGuess: '',
        sugarActual: '',
        saltActual: '',
        fatActual: '',
        calories: ''
      }
    })
  }

  render () {
    return (
      <div className='app'>
        {this.state.displayHeader && <Header />}
        {this.state.displaySearchForm && <SearchForm handleSearchFormClick={this.handleSearchFormClick} />}
        {this.state.displayMainImage && <MainImage />}
        {this.state.displayFoodChoices && <FoodChoices handleSearchFormClick={this.handleSearchFormClick} />}
        {this.state.displayFood && <Food food={this.state.food} />}
        {this.state.displaySearchAgain && <SearchAgain handleSearchAgainClick={this.handleSearchAgainClick} />}
      </div>
    )
  }
}

// const App = () => {
//   return (
//     <Router>
//       <div className='app'>
//         <Route path='/' component={Header} />
//         <Route exact path='/' component={Start} />
//         <Route path='/choose' component={SearchForm} />
//         <Route path='/choose' component={FoodChoices} />
//         <Route path='/food/:name' component={Food} />
//         <Route path='/food/:name/actual' component={Actual} />
//       </div>
//     </Router>
//   )
// }

export default App
