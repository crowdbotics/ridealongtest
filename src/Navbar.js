import React from 'react'
import {Link, withRouter} from 'react-router-dom'

const Navbar = ({location, isLoggedIn}) =>{
const arr = location.pathname.split("/")
return(
  <div>
    {arr[1]=== "patients" && isLoggedIn? arr[2]: "WPC App"}
    <Link to="/">Home</Link>
  </div>

) }
export default withRouter(Navbar)
