import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'


class Menu extends React.Component{
  render(){
    return(
      <div>
        <h3>{"Welcome, User!!!!"}</h3>
	<Link to="outreachlist">{"Outreach List"}</Link>
	<button onClick={this.props.Auth}>{"sign out"}</button>
      </div>
    )
  }

}

export default Menu
