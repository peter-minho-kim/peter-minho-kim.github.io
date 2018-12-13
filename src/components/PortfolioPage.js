import React from 'react'
import Navigation from './Navigation'

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedProject: 'lucidity'
    }
  }
  render() {
    return (
      <div>
        <Navigation history={this.props.history} />
        <div className="project-tabs">
          <h2 className="project-tabs__title">Lucidity</h2>
          <h2 className="project-tabs__title">CryptiQ</h2>
        </div>
        <div className="project-wrapper">
          <a href="#">
            <img src="//unsplash.it/1100/1100" alt="" />
            <p className="project-text">
              THIS IS WHERE THE PROJECT INFORMATION TEXT GOES
            </p>
          </a>
        </div>
      </div>
    )
  }
}

export default PortfolioPage