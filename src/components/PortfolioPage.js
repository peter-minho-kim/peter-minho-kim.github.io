import React from 'react';
import Navigation from './Navigation';

class PortfolioPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectView: 'lucidity',
      projectUrl: 'https://lucidity-app.herokuapp.com/',
      projectGithub: 'https://github.com/peter-minho-kim/lucidity',
      projectVideoPath: './videos/lucidity-demo.mp4',
      projectImgPath: './images/lucidity-screenshot.jpg',
      projectInfo:
        'An experimental React application that allows users to document their dreams and track statistical sleeping patterns with the intention of helping users become lucid dreamers.',
      projectHashTags:
        '#react #redux #front-end development #interactive design #ui design'
    };
    this.handleLuciditySelect = this.handleLuciditySelect.bind(this);
    this.handleCryptiqSelect = this.handleCryptiqSelect.bind(this);
    this.handleProjectWrapperClick = this.handleProjectWrapperClick.bind(this);
    this.handleProjectMouseEnter = this.handleProjectMouseEnter.bind(this);
    this.handleProjectMouseLeave = this.handleProjectMouseLeave.bind(this);
  }
  handleLuciditySelect() {
    if (this.state.projectView === 'cryptiq') {
      this.refs.projectWrapper.classList.add('fade-out-in');
      this.refs.projectMobileInfo.classList.add('fade-out-in');

      setTimeout(() => {
        this.setState(() => {
          return {
            projectView: 'lucidity',
            projectUrl: 'https://lucidity-app.herokuapp.com/',
            projectGithub: 'https://github.com/peter-minho-kim/lucidity',
            projectVideoPath: './videos/lucidity-demo.mp4',
            projectImgPath: './images/lucidity-screenshot.jpg',
            projectInfo:
              'An experimental React application that allows users to document their dreams and track statistical sleeping patterns with the intention of helping users become lucid dreamers.'
          };
        });
      }, 500);

      setTimeout(() => {
        this.refs.projectWrapper.classList.remove('fade-out-in');
        this.refs.projectMobileInfo.classList.remove('fade-out-in');
      }, 1100);
    }
    this.refs.lucidityLink.classList.add('active-link');
    this.refs.lucidityLink.classList.remove('inactive-link');
    this.refs.cryptiqLink.classList.remove('active-link');
    this.refs.cryptiqLink.classList.add('inactive-link');

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      this.refs.videoDemo.classList.remove('project-fade-out');
      this.refs.projectText.classList.remove('project-text-fade-in');
    }
  }
  handleCryptiqSelect() {
    if (this.state.projectView === 'lucidity') {
      this.refs.projectWrapper.classList.add('fade-out-in');
      this.refs.projectMobileInfo.classList.add('fade-out-in');

      setTimeout(() => {
        this.setState(() => {
          return {
            projectView: 'cryptiq',
            projectUrl: 'https://cryptiq.herokuapp.com/',
            projectGithub: 'https://github.com/peter-minho-kim/cryptiq',
            projectVideoPath: './videos/cryptiq-demo.mp4',
            projectImgPath: './images/cryptiq-screenshot.jpg',
            projectInfo:
              'A mock cryptocurrency e-commerce platform that takes the user through an intuitive process of purchasing Bitcoin, Ethereum, and Iota.'
          };
        });
      }, 500);

      setTimeout(() => {
        this.refs.projectWrapper.classList.remove('fade-out-in');
        this.refs.projectMobileInfo.classList.remove('fade-out-in');
      }, 1100);
    }
    this.refs.cryptiqLink.classList.remove('inactive-link');
    this.refs.cryptiqLink.classList.add('active-link');
    this.refs.lucidityLink.classList.add('inactive-link');
    this.refs.lucidityLink.classList.remove('active-link');

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      this.refs.videoDemo.classList.remove('project-fade-out');
      this.refs.projectText.classList.remove('project-text-fade-in');
    }
  }
  handleProjectWrapperClick() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      this.refs.videoDemo.classList.toggle('project-fade-out');
      this.refs.projectText.classList.toggle('project-text-fade-in');
      this.refs.videoDemo.classList.length === 1
        ? (document.querySelector('.project-link').style.zIndex = '-5')
        : (document.querySelector('.project-link').style.zIndex = '5');

      const projectLinks = document.querySelectorAll('.project-link');
      projectLinks.forEach((link) => {
        this.refs.videoDemo.classList.length === 1
          ? (link.style.zIndex = '-5')
          : (link.style.zIndex = '5');
      });
    }
  }
  handleProjectMouseEnter() {
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      this.refs.videoDemo.classList.toggle('project-fade-out');
      this.refs.projectText.classList.toggle('project-text-fade-in');
    }
  }
  handleProjectMouseLeave() {
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      this.refs.videoDemo.classList.toggle('project-fade-out');
      this.refs.projectText.classList.toggle('project-text-fade-in');
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.refs.projectWrapper.classList.remove('slide-in-bottom');
      this.refs.lucidityLink.classList.remove('slide-in-right');
      this.refs.cryptiqLink.classList.remove('slide-in-left');
      this.refs.projectMobileInfo.classList.remove('fade-in');
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }, 1500);

    if (/Mobi|Android/i.test(navigator.userAgent)) {
      const projectLinks = document.querySelectorAll('.project-link');
      projectLinks.forEach((link) => {
        link.style.zIndex = '-5';
      });
    }
  }
  render() {
    return (
      <div className="portfolio-wrapper-container">
        <Navigation history={this.props.history} />
        <div className="portfolio-wrapper">
          <div className="project-tabs">
            <h2
              className="project-tabs__title active-link slide-in-right lucidity-link"
              onClick={this.handleLuciditySelect}
              ref="lucidityLink"
            >
              Lucidity
            </h2>
            <h2
              className="project-tabs__title inactive-link slide-in-left cryptiq-link"
              onClick={this.handleCryptiqSelect}
              ref="cryptiqLink"
            >
              CryptiQ
            </h2>
          </div>

          <div
            className="project-wrapper slide-in-bottom"
            onMouseEnter={this.handleProjectMouseEnter}
            onMouseLeave={this.handleProjectMouseLeave}
            onClick={this.handleProjectWrapperClick}
            ref="projectWrapper"
          >
            <div className="project-video-box project-video-box--lucidity u-margin-bottom-s">
              {/Mobi|Android/i.test(navigator.userAgent) ? (
                <img
                  src={this.state.projectImgPath}
                  className="video-demo"
                  ref="videoDemo"
                />
              ) : (
                <video
                  src={this.state.projectVideoPath}
                  autoPlay
                  loop
                  muted
                  preload="metadata"
                  type="video/mp4"
                  className="video-demo"
                  ref="videoDemo"
                ></video>
              )}
              {this.state.projectView === 'lucidity' ? (
                <div className="project-text" ref="projectText">
                  <h2 className="project-text__header">lucidity</h2>
                  <p className="project-text__about u-margin-bottom-s">
                    An experimental React application that allows users to
                    document their dreams and track statistical sleeping
                    patterns with the intention of helping users become lucid
                    dreamers.
                  </p>
                  <p className="project-text__hashtags u-margin-bottom-m">
                    {this.state.projectHashTags}
                  </p>
                  <div
                    className="project-button-wrapper"
                    ref="projectButtonWrapper"
                  >
                    <a
                      href={this.state.projectGithub}
                      className="project-link"
                      target="_blank"
                    >
                      <button className="project-button project-button--case">
                        view github
                      </button>
                    </a>
                    <a
                      href={this.state.projectUrl}
                      className="project-link"
                      target="_blank"
                    >
                      <button className="project-button">view project</button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="project-text" ref="projectText">
                  <h2 className="project-text__header">cryptiq</h2>
                  <p className="project-text__about u-margin-bottom-s">
                    A mock cryptocurrency e-commerce platform that takes the
                    user through an intuitive process of purchasing Bitcoin,
                    Ethereum, and Iota.
                  </p>
                  <p className="project-text__hashtags u-margin-bottom-m">
                    {this.state.projectHashTags}
                  </p>
                  <div
                    className="project-button-wrapper"
                    ref="projectButtonWrapper"
                  >
                    <a
                      href={this.state.projectGithub}
                      className="project-link"
                      target="_blank"
                    >
                      <button className="project-button project-button--case">
                        view github
                      </button>
                    </a>
                    <a
                      href={this.state.projectUrl}
                      className="project-link"
                      target="_blank"
                    >
                      <button className="project-button">view project</button>
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="project-bottom-bar"></div>
          </div>
          <div className="project-mobile-info fade-in" ref="projectMobileInfo">
            <p className="project-mobile-info__text u-margin-bottom-s">
              {this.state.projectInfo}
            </p>
            <p className="project-mobile-info__hashtags">
              {this.state.projectHashTags}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioPage;
