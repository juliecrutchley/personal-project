import React from 'react'
// import {HashRouter as Router} from 'react-router-dom'
import Header from './Header'
import MainImage from './MainImage'
import SearchForm from './SearchForm'
import Food from './Food'
import SearchAgain from './SearchAgain'
import {getFoodFromApi} from '../../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayHeader: true,
      displaySearchForm: true,
      displayMainImage: true,
      displaySearchAgain: false,
      displayFood: false,
      displayHealthLabels: false,
      food: {
        name: '',
        sugarActual: '',
        saltActual: '',
        fatActual: '',
        calories: '',
        healthLabels: []
      }
    }
    this.handleSearchFormClick = this.handleSearchFormClick.bind(this)
    this.handleSearchAgainClick = this.handleSearchAgainClick.bind(this)
  }

  handleSearchFormClick (searchTerm) {
    getFoodFromApi(searchTerm, (err, res) => {
      if (err) return err
      const NA = res.totalNutrients.NA || {quantity: 0}
      const SUGAR = res.totalNutrients.SUGAR || {quantity: 0}
      const FAT = res.totalNutrients.FAT || {quantity: 0}
      this.setState({
        displaySearchForm: false,
        displayMainImage: false,
        displaySearchAgain: true,
        displayFood: true,
        displayHealthLabels: true,
        food: {
          name: res.ingredients[0].parsed[0].food,
          sugarActual: Math.ceil(SUGAR.quantity),
          saltActual: Math.ceil(NA.quantity) ,
          fatActual: Math.ceil(FAT.quantity),
          calories: Math.ceil(res.calories),
          healthLabels: res.healthLabels
        }
      })
    })
  }

  handleSearchAgainClick () {
    this.setState({
      displaySearchForm: true,
      displayMainImage: true,
      displaySearchAgain: false,
      displayFood: false,
      displayHealthLabels: false,
      food: {
        name: '',
        sugarActual: '',
        saltActual: '',
        fatActual: '',
        calories: '',
        healthLabels: []
      }
    })
  }

  render () {
    return (
      <div className='app'>
        {this.state.displayHeader && <Header />}
        {this.state.displaySearchForm && <SearchForm handleSearchFormClick={this.handleSearchFormClick} />}
        {this.state.displaySearchAgain && <SearchAgain handleSearchAgainClick={this.handleSearchAgainClick} />}
        {this.state.displayMainImage && <MainImage />}
        {this.state.displayFoodChoices && <FoodChoices handleSearchFormClick={this.handleSearchFormClick} />}
        {this.state.displayFood && <Food food={this.state.food} />}

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
