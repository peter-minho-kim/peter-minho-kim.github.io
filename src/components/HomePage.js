import React from 'react'

const HomePage = () => {
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
            Connect with me on LinkedIn and GitHub.           
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage