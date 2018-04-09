import React from 'react'

const Profiles = (props) => {
    const dinosaur = props.dinosaurs.map(dinosaur => {
        return (
            <li key={dinosaur.name}>
                <div className="profile-card">
                    <header className="profile-header">
                        <h2>{dinosaur.name}</h2>
                        <img src={dinosaur.image} alt="dinosaur"/> 
                    </header>
                </div>
            </li>
        )
    })
    return (
        <section id="profiles-container">
            <h2>Profiles</h2>
            <ul id="profiles">
            {dinosaur}
            </ul>
        </section>
    )
}

export default Profiles
