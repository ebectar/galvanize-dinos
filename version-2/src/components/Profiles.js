import React from 'react';
import SkillList from './SkillList'
class Profiles extends React.Component {
  clickHandler = (event) => {
    let eventNode = event.target.parentNode
    {(eventNode.classList.contains('profile-header')) ? eventNode.parentNode.childNodes[1].classList.toggle('hidden') : '' }
  }

  createDinoCard = (dinosaur) => {
    return (
      <li key={dinosaur.name} className='profile-card' onClick={this.clickHandler}>
        <header className='profile-header'>
          <img src={dinosaur.image} alt={dinosaur.name}/>
          <h2>{dinosaur.name}</h2>
        </header>
        <section className='skills-container hidden'> 
          <h4>Skills</h4>
          <ul className='skills-list'>
            <SkillList dinosaurs={dinosaur}/>
        </ul>
        </section>
      </li>
    )
  }
  
  render() {
    return (
      <section id='profiles-container'>
        <h2>Profiles</h2>
        <ul id='profiles'>
          {this.props.dinosaurs.map(this.createDinoCard)}
        </ul>
      </section>
    )
  }
}

export default Profiles