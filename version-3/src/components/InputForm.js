import React, { Component } from 'react'

class InputForm extends Component {
    updatePreview() {
        document.querySelector('#application-preview').textContent = document.querySelector('#application-text').value
      }
    
    handleSubmit(event) {
        console.log('I was submitted!!', event)
        event.preventDefault()
        event.target.reset()
        document.querySelector('#application-preview').textContent = ''
        document.getElementById('message').textContent = 'Your application was submitted!'
      }

    render() {
        return (
            <form id='application-input' onSubmit={this.handleSubmit}>
                <label>Apply Here: </label>
                <textarea id='application-text' rows='8' cols='100' onKeyUp={this.updatePreview}></textarea>
                <input id='submit' type='submit' value='Submit' />
            </form>
        )
    }
}

export default InputForm
