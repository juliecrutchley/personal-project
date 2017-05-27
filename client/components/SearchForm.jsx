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
      response: null
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
    return (
      <div>
        <p>Enter a food or choose one from below</p>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.value} onChange={this.handleChange} />
          <input type='submit' value='Submit' Link to={'/food:name'} />
        </form>
      </div>
    )
  }
}

export default SearchForm
