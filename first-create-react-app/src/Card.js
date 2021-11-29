import React from 'react'
import Button from './Button'
import './Card.css'


const Card = (props) => {

  const capitalize = (name) => name[0].toUpperCase() + name.slice(1)


  return (
    <article className="card">
      <header>
        <p className="title">{capitalize(props.name)}</p>
        <img src={props.src} alt={props.name} />
      </header>
      <div>
        <p>Age: {props.age}</p>
        <p>Job: {props.role}</p>
      </div>
      <Button danger={props.role === "Teacher" ? props.danger : false} text="Ir al perfil detallado" href="#" />
    </article>
  )
}

export default Card