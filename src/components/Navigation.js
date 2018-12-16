import React from 'react'

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.handlePortfolioLink = this.handlePortfolioLink.bind(this)
    this.handleAboutLink = this.handleAboutLink.bind(this)
    this.handleNavToggle = this.handleNavToggle.bind(this)
  }
  handleAboutLink() {
    if (window.location.pathname === '/portfolio') {
      document.body.style.overflow = 'hidden'
      document.querySelector('.lucidity-link').classList.add('slide-out-left')
      document.querySelector('.cryptiq-link').classList.add('slide-out-right')
      document.querySelector('.project-wrapper').classList.add('slide-out-bottom')
      setTimeout(() => {
        this.props.history.push('/')
      }, 1000)
    }
    this.refs.aboutLink.classList.add('active-link')
    this.refs.aboutLink.classList.remove('inactive-link')
    this.refs.portfolioLink.classList.add('inactive-link')
    this.refs.portfolioLink.classList.remove('active-link')
    this.handleNavToggle()
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
    this.handleNavToggle()
  }
  handleNavToggle() {
    if (document.documentElement.clientWidth < 715) {
      this.refs.nav.classList.toggle('nav-background')
      this.refs.navList.classList.toggle('nav--open')
      this.refs.navList.classList.toggle('nav--visible')
      this.refs.navToggleTop.classList.toggle('nav-toggle-top')
      this.refs.navToggleBottom.classList.toggle('nav-toggle-bottom')
      
      const navLinks = document.querySelectorAll('.nav__link')
      navLinks.forEach((link) => {
        link.classList.toggle('fade-in-left')
      })  
    }
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
      <nav className="nav" ref="nav">
        <div className="nav__mobile-handle" onClick={this.handleNavToggle}>
          <div className="nav__toggle">
            <span className="nav__toggle-line nav__toggle-line--top" ref="navToggleTop">&mdash;</span>
            <span className="nav__toggle-line nav__toggle-line--bottom" ref="navToggleBottom">&mdash;</span>
          </div>
        </div>
        <ul className="nav__list" ref="navList">
          <li className="nav__link active-link about-link" onClick={this.handleAboutLink} ref="aboutLink">about</li>
          <li className="nav__link inactive-link portfolio-link" onClick={this.handlePortfolioLink} ref="portfolioLink">portfolio</li>
          <li className="nav__link resume-link" id="nav__link--resume" onClick={this.handleNavToggle}>
            <a href="/assets/peter-kim-resume.pdf" className="inactive-link" target="_blank">resume</a>
          </li>
          <li className="nav__link inactive-link nav__social-link linkedin-link" onClick={this.handleNavToggle}>
            <a href="https://www.linkedin.com/in/peter-kim-developer/" className="inactive-link" target="_blank">linkedin</a>
          </li>
          <li className="nav__link inactive-link nav__social-link github-link" onClick={this.handleNavToggle}>
            <a href="https://github.com/peter-minho-kim" className="inactive-link" target="_blank">github</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navigation