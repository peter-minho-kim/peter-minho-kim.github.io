import React from 'react'

class HomePage extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
      document.body.style.overflow = 'auto'
    }, 2000)
  }
  render() {
    return (
      <div>
        <div className="hello-container">
          hello
        </div>

        <div className="about">
          <div className="about__portrait"></div>
          <div className="about__content">
            <p className="about__content__text">
              I'm Peter Kim, front-end developer, user experience aficionado, and lover of great design.
            </p>
            <p className="about__content__text">
              Connect with me on <a href="https://www.linkedin.com/in/peter-kim-developer/" className="about__content__text-link" target="_blank">LinkedIn</a> and <a href="https://github.com/peter-minho-kim" className="about__content__text-link" target="_blank">GitHub</a>.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage