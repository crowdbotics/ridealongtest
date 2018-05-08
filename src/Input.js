import React from 'react';

const Input = ({value}) => (
  <div>
    <input onChange={(e)=>{console.log(e.value)}} value={value}/>
  </div>
)

export default Input
