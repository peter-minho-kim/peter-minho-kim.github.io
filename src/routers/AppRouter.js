import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutPage from '../components/AboutPage'
import HomePage from '../components/HomePage'
import Header from '../components/Header'
import IntroAnimation from '../components/IntroAnimation'
import Navigation from '../components/Navigation'
import NotFoundPage from '../components/NotFoundPage'
import PortfolioPage from '../components/PortfolioPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      {/*<IntroAnimation />*/}
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter