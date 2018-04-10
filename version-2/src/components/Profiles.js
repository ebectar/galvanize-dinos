import React from 'react'

import SkillList from './SkillList'

const Profiles = (props) => {
    const dinosaurs = props.dinosaurs.map(dinosaur => {
        return (
            <li key={dinosaur.name}>
                <div className="profile-card">
                    <header className="profile-header">
                        <img src={dinosaur.image} alt="dinosaur"/>
                        <h2>{dinosaur.name}</h2> 
                    </header>
                    <SkillList skills={dinosaur.skills} />
                </div>
            </li>
        )
    })
    return (
        <section id="profiles-container">
            <h2>Profiles</h2>
            <ul id="profiles">
                {dinosaurs}
            </ul>
        </section>
    )
}

export default Profiles