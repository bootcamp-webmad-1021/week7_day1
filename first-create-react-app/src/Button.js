import React from 'react'
import './Button.css'

const Button = (props) => {

  return <a className="btn" style={{ backgroundColor: props.danger ? "red" : "green" }
  } href={props.href} target={props.target} > {props.text}</a>

}

export default Button