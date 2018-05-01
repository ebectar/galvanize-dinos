import React from 'react';
import Preview from './Preview'

class InputForm extends React.Component {

  state = {
    message: "",
    showResponse: false
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      message: event.target.value
    })
  }

  clearForm = (event) => {
    // event.preventDefault()
    this.setState({
      message: ""
    })
  }



  submitMessage = (event) => {
    event.preventDefault()
    this.setState({
      showResponse: true,
      message: this.clearForm()
    })
  }


  render () {
    const showResponse = this.state.showResponse
    return (
      <div>
        <form id="application-input">
          <label>Apply Here: </label>
          <textarea id="application-text" rows="8" cols="100" onChange={this.handleChange}></textarea>
          <input id="submit" type="submit" value="Submit" onClick={this.submitMessage}/>
        </form>
        {showResponse && <p id="message">Your application was submitted!</p>}
        <Preview message={this.state.message} />
      </div>
    )
  }
}

export default InputForm