import React from 'react'

class SearchAgain extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      errorMsg: null,
      searchTerm: ''
    }
  }

  render () {
    return (
        <button className="searchAgainButton" onClick={this.props.handleSearchAgainClick}>Search again!</button>
    )
  }
}

export default SearchAgain
