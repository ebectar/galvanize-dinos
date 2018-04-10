import React, { Component } from 'react'

class InputForm extends Component {

    handleSubmit(){
        //target input id of submit
        //fills p id message with 'Your application was submitted;
    }

    //fillForm(){
        //take info from textarea populating preview }

    render() {
        return (
            <form id="application-input">
                <label>Apply Here: </label>
                <textarea id="application-text" rows="8" cols="100"></textarea>
                <input id="submit" type="submit" value="Submit" onSubmit={this.handleSubmit}/>
            </form>
        )
    }
}

export default InputForm
