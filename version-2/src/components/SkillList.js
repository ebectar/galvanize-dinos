
import React from 'react'
class SkillList extends React.Component {
  createDinoCard(dinosaur) {
    return (
      <li key={dinosaur}>{dinosaur}</li>
    )
  }
  
  render() {
    return (
        <ul className='skills-list'>
          {this.props.dinosaurs.skills.map(this.createDinoCard)}
        </ul>
    )
  }
}

  export default SkillList