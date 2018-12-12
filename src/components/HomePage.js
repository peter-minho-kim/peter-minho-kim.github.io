import React from 'react'
import IntroAnimation from './IntroAnimation'
import Navigation from './Navigation'
import Header from './Header'

const HomePage = (props) => {
  return (
    <div>
      <IntroAnimation history={props.history} />
    </div>
  )
}

export default HomePage