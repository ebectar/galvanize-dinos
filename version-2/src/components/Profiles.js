import React from 'react'

import SkillList from './SkillList'

class Profiles extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            listItem: []
        }
    }

    listItem = (dinosaur) => {
        return (
            <li key={dinosaur.name}>
                <div className="profile-card">
                    <header className="profile-header">
                        <img src={dinosaur.image} alt="{dinosaur.name}"/>
                        <h2>{dinosaur.name}</h2> 
                    </header>
                    <section className="skills-container hidden"> 
                    <h4>Skills</h4>
                    <ul className="skills-list">
                        <SkillList dinosaurs={dinosaur}/>
                    </ul>
                    </section>
                </div>
            </li>
        )
    }

    render(){
        return (
            <section id="profiles-container">
                <h2>Profiles</h2>
                <ul id="profiles">
                    {this.props.dinosaurs.map(this.listItem)}
                </ul>
            </section>
        )
    }
}
export default Profiles
