import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import Profiles from './components/Profiles'
// import SkillList from './components/SkillList'
import Footer from './components/Footer'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dinosaurs: []
    }
  }

  componentDidMount(){
    fetch('./dinosaurs.json')
    .then(response => response.json())
    .then(response => this.setState({ dinosaurs: response }))
    }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Profiles dinosaurs={this.state.dinosaurs} />
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
