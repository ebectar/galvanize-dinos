import React from 'react';

class Preview extends React.Component {

  state = {
    showPreview: false
  }

  toggleClass = (event) => {
    event.preventDefault()
    const preview = !this.state.showPreview
    this.setState({
      showPreview: preview
    })
  }

  render () {
    const showPreview = this.state.showPreview
    return (
      <div>
        <button id="preview-toggle" onClick={this.toggleClass}>Show Preview</button>
        {showPreview && <section id="application-preview">{this.props.message}</section>}
      </div>
    )
  }
}

export default Preview;