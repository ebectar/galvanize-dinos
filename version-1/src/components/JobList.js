 import React from 'react'
 
 class JobList extends React.Component { 
  listItem(dinosaurs) {
    return (
      <li key={dinosaurs.id}>
        <h4>{dinosaurs.title}</h4>
        <small>{dinosaurs.pay}</small>
        <p>{dinosaurs.description}</p>
        <small>{dinosaurs.interested.length} dinos are interested in this job</small>
      </li> 
    )
  }

    render() {
        return (
          <section>
            <h2>Job Listings</h2>
            <ul id="job-listings">
              {this.props.listings.map(this.listItem)}
            </ul>
          </section>
        )
      }
}

 export default JobList