import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import JobList from './components/JobList'
import JobForm from './components/JobForm'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobList />
          <JobForm />
        </main>
        <Footer />
      </div>
    )
  }
}
export default App;