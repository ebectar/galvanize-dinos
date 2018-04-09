import React from 'react'


const Dinosaur = (props) => {
  return (
    <div>
        <h2>{props.name}</h2>
        <img src={props.imageURL} alt="dinosaur" />
        <p>{props.skills}</p>
    </div>
  )
}

export default Dinosaur