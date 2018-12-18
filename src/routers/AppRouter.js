import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutPage from '../components/AboutPage'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import IntroAnimation from '../components/IntroAnimation'
import PortfolioPage from '../components/PortfolioPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <IntroAnimation />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} />
        <Route path="/portfolio" component={PortfolioPage} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export default AppRouter