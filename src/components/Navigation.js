import React from 'react'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.handlePortfolioLink = this.handlePortfolioLink.bind(this)
    this.handleAboutLink = this.handleAboutLink.bind(this)
  }
  handleAboutLink() {
    if (window.location.pathname === '/portfolio') {
      this.props.history.push('/')
    }
  }
  handlePortfolioLink() {
    if (window.location.pathname === '/') {
      document.body.style.overflow = 'hidden'
      document.querySelector('.hello-container').classList.remove('slide-out-right')
      document.querySelector('.hello-container').classList.add('slide-out-right')
      document.querySelector('.about__portrait').classList.remove('slide-in-right')
      document.querySelector('.about__portrait').classList.add('slide-out-left')
      document.querySelector('.about__content').classList.remove('slide-in-bottom')
      document.querySelector('.about__content').classList.add('slide-out-bottom')
      setTimeout(() => {
        this.props.history.push('/portfolio')
        document.body.style.overflow = 'auto'
      }, 1200)
    }
  }
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__link" onClick={this.handleAboutLink}>about</li>
          <li className="nav__link" onClick={this.handlePortfolioLink}>portfolio</li>
        </ul>
      </nav>
    )
  }
}

export default Navigation