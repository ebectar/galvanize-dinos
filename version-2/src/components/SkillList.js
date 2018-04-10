import React from 'react'

class SkillList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSkills: false
        }
    }

    toggleSkills = () => {
        const status = !this.state.showSkills
        this.setState({
            showSkills: status
        })
    }

    render(){
    const showSkills = this.state.showSkills
    const skills = this.props.skills.map(skill => <li key={skill}>{skill}</li>)
    
    return (
        <section className="skills-container" onClick={this.toggleSkills}>
        <h4>Skills</h4>
        {showSkills ? <ul className="skills-list">{skills}</ul> : ""} 
        </section>
    )
    }
}


export default SkillList