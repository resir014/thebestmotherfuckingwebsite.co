import * as React from 'react'
import Link from 'gatsby-link'
import { Element, Events, scrollSpy, animateScroll as scroll } from 'react-scroll'

import Intro from '../components/Intro'
import About from '../components/About'
import Features from '../components/Features'
import Epilogue from '../components/Epilogue'
import Container from '../components/Container'
import FullScreenSection from '../components/FullScreenSection'
import Footer from '../components/Footer'

class IndexPage extends React.Component<{}, {}> {
  constructor () {
    super()
  }

  public componentDidMount() {
    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments)
    })

    scrollSpy.update()
  }

  public componentWillMount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  public render() {
    return (
      <div style={{ height: '100%' }}>
        <Intro />
        <About />
        <Features />
        <Epilogue />
        <Footer />
      </div>
    )
  }
}

export default IndexPage
