import React from 'react'

import SkillList from './SkillList'

class ProfileCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            di
        }
    }
    
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
    
}

export default ProfileCard


//do we need to rerender