import React from "react"
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Link to={"/start"}>Let's start!</Link> 
    </div>
  )
}

export default Home
