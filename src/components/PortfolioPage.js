import React from 'react'
import Navigation from './Navigation'

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Navigation history={this.props.history} />
        <h1>THIS IS THE PORTFOLIO PAGE</h1>
      </div>
    )
  }
}

export default PortfolioPage