import React from 'react'
import Navigation from './Navigation'

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projectView: 'lucidity',
      projectUrl: 'https://lucidity-app.herokuapp.com/',
      projectPath: './videos/lucidity-demo.mp4'
    }
    this.handleLuciditySelect = this.handleLuciditySelect.bind(this)
    this.handleCryptiqSelect = this.handleCryptiqSelect.bind(this)
  }
  handleLuciditySelect() {
    if (this.state.projectView === 'cryptiq') {
      this.refs.projectWrapper.classList.add('fade-out-in')

      setTimeout(() => {
        this.setState(() => {
          return {
            projectView: 'lucidity',
            projectUrl: 'https://lucidity-app.herokuapp.com/',
            projectPath: './videos/lucidity-demo.mp4'
          }
        })
      }, 500)

      setTimeout(() => {
        this.refs.projectWrapper.classList.remove('fade-out-in')
      }, 1100)
    }
    this.refs.lucidityLink.classList.add('active-link')
    this.refs.lucidityLink.classList.remove('inactive-link')
    this.refs.cryptiqLink.classList.remove('active-link')
    this.refs.cryptiqLink.classList.add('inactive-link')
  }
  handleCryptiqSelect() {
    if (this.state.projectView === 'lucidity') {
      this.refs.projectWrapper.classList.add('fade-out-in')

      setTimeout(() => {
        this.setState(() => {
          return {
            projectView: 'cryptiq',
            projectUrl: 'https://cryptiq.herokuapp.com/',
            projectPath: './videos/cryptiq-demo.mp4'
          }
        })
      }, 500)

      setTimeout(() => {
        this.refs.projectWrapper.classList.remove('fade-out-in')
      }, 1100)
    }
    this.refs.cryptiqLink.classList.remove('inactive-link')
    this.refs.cryptiqLink.classList.add('active-link')
    this.refs.lucidityLink.classList.add('inactive-link')
    this.refs.lucidityLink.classList.remove('active-link')
  }
  componentDidMount() {
    setTimeout(() => {
      this.refs.projectWrapper.classList.remove('fade-in')
    }, 1200)
  }
  render() {
    return (
      <div>
        <Navigation history={this.props.history} />
        <div className="project-tabs">
          <h2 
            className="project-tabs__title active-link" 
            onClick={this.handleLuciditySelect}
            ref="lucidityLink"
          >
            Lucidity
          </h2>
          <h2 
            className="project-tabs__title inactive-link" 
            onClick={this.handleCryptiqSelect}
            ref="cryptiqLink"
          >
            CryptiQ
          </h2>
        </div>

        <div className="project-wrapper fade-in" ref="projectWrapper">
          <div className="project-video-box project-video-box--lucidity">
            <a href={this.state.projectUrl} target="_blank">
              <video src={this.state.projectPath} autoPlay loop muted preload="auto" className="video-demo"></video>
              <div>
                {this.state.projectView === 'lucidity' ? 
                  <p className="project-text">
                    LUCIDITY LUCIDITY 
                  </p>
                  :
                  <p className="project-text">
                    CRYPTIQ CRYPTIQ
                  </p>
                }
              </div>
            </a>
          </div>         
        </div>
      </div>
    )
  }
}

export default PortfolioPage