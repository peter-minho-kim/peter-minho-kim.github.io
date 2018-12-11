import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AboutPage from '../components/AboutPage'
import HomePage from '../components/HomePage'
import IntroAnimation from '../components/IntroAnimation'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      {/*<IntroAnimation />*/}
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter