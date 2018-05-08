import React from 'react'

const Patient = ({match}) => {
return(
  <div>{"here is patient: " + match.params.name}</div>
)}

export default Patient
