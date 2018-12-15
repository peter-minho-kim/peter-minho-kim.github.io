import React from 'react'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.handlePortfolioLink = this.handlePortfolioLink.bind(this)
    this.handleAboutLink = this.handleAboutLink.bind(this)
  }
  handleAboutLink() {
    if (window.location.pathname === '/portfolio') {
      document.body.style.overflow = 'hidden'
      document.querySelector('.lucidity-link').classList.add('slide-out-left')
      document.querySelector('.cryptiq-link').classList.add('slide-out-right')
      document.querySelector('.project-wrapper').classList.add('slide-out-bottom-center')
      setTimeout(() => {
        this.props.history.push('/')
      }, 1000)
    }
    this.refs.aboutLink.classList.add('active-link')
    this.refs.aboutLink.classList.remove('inactive-link')
    this.refs.portfolioLink.classList.add('inactive-link')
    this.refs.portfolioLink.classList.remove('active-link')
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
      }, 1200)
    }
    this.refs.aboutLink.classList.remove('active-link')
    this.refs.aboutLink.classList.add('inactive-link')
    this.refs.portfolioLink.classList.remove('inactive-link')
    this.refs.portfolioLink.classList.add('active-link')
  }
  componentDidMount() {
    if (this.props.history.location.pathname === '/portfolio') {
      this.refs.aboutLink.classList.remove('active-link')
      this.refs.aboutLink.classList.add('inactive-link')
      this.refs.portfolioLink.classList.remove('inactive-link')
      this.refs.portfolioLink.classList.add('active-link')
    } else if (this.props.history.location.pathname === '/') {
      this.refs.aboutLink.classList.add('active-link')
      this.refs.aboutLink.classList.remove('inactive-link')
      this.refs.portfolioLink.classList.add('inactive-link')
      this.refs.portfolioLink.classList.remove('active-link')
    } else {
      this.refs.aboutLink.classList.add('inactive-link')
      this.refs.portfolioLink.classList.add('inactive-link')
    }
  }
  render() {
    return (
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__link active-link" onClick={this.handleAboutLink} ref="aboutLink">about</li>
          <li className="nav__link inactive-link" onClick={this.handlePortfolioLink} ref="portfolioLink">portfolio</li>
          <li className="nav__link" id="nav__link--resume">
            <a href="/assets/peter-kim-resume.pdf" className="inactive-link" target="_blank">resume</a>
          </li>
          <li className="nav__link inactive-link nav__social-link">
            <a href="https://www.linkedin.com/in/peter-kim-developer/" className="inactive-link" target="_blank">linkedin</a>
          </li>
          <li className="nav__link inactive-link nav__social-link">
            <a href="https://github.com/peter-minho-kim" className="inactive-link" target="_blank">github</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation