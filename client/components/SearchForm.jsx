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
        <p>Enter a food or choose one from below</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' name='searchTerm' onChange={this.handleChange.bind(this)} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
    // render () {
    //   return (
    //     <div className="app">
    //       <p>Hello</p>
    //     </div>
    //   )
    // }

  }
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     value: ''
  //   }
  //   this.handleChange = this.handleChange.bind(this)
  //   this.handleSubmit = this.handleSubmit.bind(this)
  //
  //
  // }
  //
  // handleChange (event) {
  //   this.setState({
  //     value: event.target.value}
  //   )
  //   console.log('Changed ' + this.state.value)
  // }
  //
  // handleSubmit (event) {
  //   event.preventDefault()
  //   this.setState({
  //     errMessage: null,
  //     response: null
  //   })
  //   getFoodFromApi(this.state.value, (err, res) => {
  //     if (err) {
  //       this.setState({errMessage: err})
  //       return
  //     }
  //     this.setState(
  //       {response: res}
  //     )
  //
  //   })
  //   console.log('Submitted ' + this.state.value)
  //   console.log(this.state.response)
  //   console.log(this.state.response.calories)
  // }
  //

export default SearchForm
