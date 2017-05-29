import React from 'react'

class SearchForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMsg: null,
      searchTerm: ''
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    const term = this.state.searchTerm
    this.props.handleSearchFormClick(term)
    console.log('Submitted to api: ' + term)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('Changed ' + this.state.searchTerm)
  }

  render () {
    return (
      <div className='searchForm'>
        <h3>Search for a food or choose one from below</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' name='searchTerm' onChange={this.handleChange.bind(this)} />
          <input className='searchButton' type='submit' value='Search' />
        </form>
      </div>
    )
  }
}

export default SearchForm
