import React from 'react';
import Input from './Input'

const Form = ({Auth}) =>(
  <div>
  <form onSubmit={Auth}>
    <Input value="hellworld"/>
    <Input value="this works"/>
    <button>{"Sign in"}</button>
  </form>
  </div>
)

export default Form;
