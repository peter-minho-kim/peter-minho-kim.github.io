import React from 'react';
import Navigation from './Navigation';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navigation history={this.props.history} />
        <div className="hello-container fade-in" ref="helloContainer">
          hello
        </div>

        <div className="about">
          <div className="about__portrait slide-in-right u-margin-bottom-s"></div>
          <div className="about__content slide-in-bottom u-margin-bottom-m">
            <p className="about__content__text">
              I'm Peter Kim, software engineer, user interface designer, and
              lover of tacos.
            </p>
            <p className="about__content__text">
              Connect with me on{' '}
              <a
                href="https://www.linkedin.com/in/peter-kim-dev/"
                className="about__content__text-link"
                target="_blank"
              >
                LinkedIn
              </a>{' '}
              and{' '}
              <a
                href="https://github.com/peter-minho-kim"
                className="about__content__text-link"
                target="_blank"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
