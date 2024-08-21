import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
     <div className="w3-bar w3-light-grey">
    
  <Link to="/" className="w3-bar-item w3-button">Home</Link>
  <Link to="/exercises" className="w3-bar-item w3-button">Exercisies</Link>
  <Link to="/trafficklight" className="w3-bar-item w3-button">Traffick</Link>
  {/* <Link to="/link" className="w3-bar-item w3-button">Link 3</Link> */}
</div>
</div>
  )
}
