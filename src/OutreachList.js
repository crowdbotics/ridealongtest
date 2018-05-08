import React from 'react'
import {Link} from 'react-router-dom'
class OutreachList extends React.Component{
  userList= [

   {name: "hello", recentCheckup: "4/21/18", userId:"001"},
   {name: "someone else", recentCheckup: "3/12/22", userId:"002"},
   {name: "someone here too", recentCheckup: "7/21/17", userId:"000"}
  ]
  render(){
     return(
	<div>
          {this.userList.map(patient=>(
            <div key={patient.userId}>
              <Link to={"/patients/" + patient.name }>{patient.name}</Link>
              {"last seen:" + patient.recentCheckup}</div>
          ))}
	</div>
     )
  }

}

export default OutreachList
