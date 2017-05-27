import React from 'react'
import {Link} from 'react-router-dom'

import {getFoodFromApi} from '../../api'

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchQuery: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({
      value: event.target.value}
    )
    console.log('Changed ' + this.state.value)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      errMessage: null,
      response: null,
      searchQuery:this.state.value
    })
    getFoodFromApi(this.state.value, (err, res) => {
      if (err) {
        this.setState({errMessage: err})
        return
      }
      this.setState(
        {response: res}
      )

    })
    console.log('Submitted ' + this.state.value)
    console.log(this.state.response)
    console.log(this.state.response.calories)
  }

  render () {
    console.log(this.state.searchQuery)
    return (
      <div>
        <p>Enter a food or choose one from below</p>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          <Link to = {"/food/:" + this.state.value}><input type='submit' value='Submit' placeholder='enter a food in here...' /></Link>

          <div>

          </div>

        </form>
      </div>
    )
  }
}

export default SearchForm
