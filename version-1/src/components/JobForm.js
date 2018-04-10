import React from 'react'
class JobForm extends React.Component {
    state = {
      id: '',
      title: '', 
      pay: '', 
      description: '', 
      interested: ''
    }

    resetForm = () => {
      this.setState(
        {
          id: '',
          title: '', 
          pay: '', 
          description: '', 
          interested: ''
        }
      )
    }

  handleInputChange = (event) => {
    this.setState(
      {[event.target.name]: event.target.value}
    )
  }

  handleSubmit = (event) => {
      event.preventDefault()
      this.props.jobListingSubmitted(this.state)
      this.resetForm()
  }

  render(){
    return (
       
          <form className="job-form" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
            <label htmlFor="pay">Compensation</label>
            <input type="text" name="pay" value={this.state.pay} onChange={this.handleInputChange}/>
            <label htmlFor="description">Description</label>
            <textarea name= "description" rows="8" cols="40" value={this.state.description} onChange={this.handleInputChange}></textarea>
            <input type="submit" name="submit" value="Submit" />
          </form>

      )
  }
}

export default JobForm