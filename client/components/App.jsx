import React from 'react'
// import {HashRouter as Router} from 'react-router-dom'
import Header from './Header'
// import Start from './Start'
import SearchForm from './SearchForm'
// import FoodChoices from './FoodChoices'
import Food from './Food'
// import Actual from './Actual'
import {getFoodFromApi} from '../../api'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // searchTerm: '',
      // apiLoaded: false,
      displayHeader: true,
      // displayStart: true
      displaySearchForm: true,
      // displayFoodChoices: false,
      displayFodd: false,
      // displayGuessForm: false,
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
    // this.handleGuessFormClick = this.handleGuessFormClick.bind(this)
  }

  handleSearchFormClick (searchTerm) {
    getFoodFromApi(searchTerm, (err, res) => {
      if (err) return err
      this.setState({
        displayHeader: true,
        displaySearchForm: false,
        displayFood: true,
        food: {
          sugarGuess: '',
          saltGuess: '',
          fatGuess: '',
          sugarActual: 'res.totalNutrients.SUGAR.quantity',
          saltActual: '',
          fatActual: '',
          calories: 'res.calories'
        }
      })
    })
  }

  render () {
    return (
      <div className='app'>
        {this.state.displayHeader && <Header />}
        {this.state.displaySearchForm && <SearchForm handleSearchFormClick={this.handleSearchFormClick} />}
        {this.state.displayFood && <Food food={this.state.food} />}

      </div>
    )
  }
}

// {this.state.displayStart && <Start />}
// {this.state.displaySearchForm && <SearchForm />}
// {this.state.displayFoodChoices && <FoodChoices />}
// {this.state.displayFood && <Food />}
// {this.state.displayActual && <Actual />}

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
