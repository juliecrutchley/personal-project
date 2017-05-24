import React from "react"
import {Link} from 'react-router-dom'

const Start = () => {
  return (
    <div className="start">
      <Link to={"/choose"}>Let's start!</Link>
    </div>
  )
}

export default Start
