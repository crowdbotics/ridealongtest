import React from 'react';
import Form from './Form'
import Menu from './Menu'
import {BrowserRouter, Link, Route} from 'react-router-dom'

import OutreachList from './OutreachList'
import Navbar from './Navbar'
import Patient from './Patient'

class App extends React.Component{
  state = {signedIn: false}

  signIn = (e) =>{
    e.preventDefault();
    this.setState({signedIn: !this.state.signedIn})
  }
  


  render(){
    return(
       <BrowserRouter>
       <div>
         <Navbar isLoggedIn={this.state.signedIn}/>
         {!this.state.signedIn ? <Form Auth={this.signIn}/> :(
         <div>
           <Route exact path="/" component={() => React.createElement(Menu, {Auth:this.signIn})}/>
	   <Route path="/outreachlist" component={OutreachList}/>
           <Route path="/patients/:name" component={Patient}/>
         </div>
       )}</div>
       </BrowserRouter> 
     )}
}

export default App;
