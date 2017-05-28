import React from "react"
import {Link} from 'react-router-dom'
import {Router, Route} from 'react-router'
import foodsData from '../../data/foods'

class MacroForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sugar: '',
      salt: '',
      fat: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({sugar: event.target.sugar})
    console.log('handleChange')
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('handleSubmit')

  }

  render() {
    // const foodId = this.props.match.params.id
    // const food = foodsData.filter(function (f) {return f.id == foodId})[0]
    // console.log(food)
    return (
      // <div>
      //   <p>Hello</p>
      // </div>
      <div className="macro-form">
        <form onSubmit={this.handleSubmit}>
         <div className="macro-form-container">
           <div className="macro sugar">
            <p>Sugar</p>
            <input type="text" name="sugar" onChange={this.handleChange} />
          </div>
          <div className="macro salt">
            <p>Salt</p>
            <input type="text" name="salt" onChange={this.handleChange} />
          </div>
          <div className="macro fat">
            <p>Fat</p>
            <input type="text" name="fat" onChange={this.handleChange} />
          </div>
        </div>
      </form>
      <div>
       <Link to={"/food/:id/actual"}>Submit</Link>
      </div>
    </div>


    //   <div className="macro-form">
    //     <div className="macro-container"
    //       <div className="macro sugar">
    //         <p>Sugar</p>
    //         <input type="text" name="" />
    //       </div>
    //       <div className="macro salt">
    //         <p>Salt</p>
    //         <input type="text" name="" />
    //       </div>
    //       <div className="macro fat">
    //         <p>Fat</p>
    //         <input type="text" name="" />
    //       </div>
    //     </div>
    //   <div>
    //    <Link to={"/food/actual"}>Submit</Link>
    //   </div>
    // </div>
  )
  }
}

export default MacroForm
