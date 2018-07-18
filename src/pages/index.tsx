import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Element, Events, scrollSpy, animateScroll as scroll } from 'react-scroll'

import Intro from '../components/Intro'
import About from '../components/About'
import Features from '../components/Features'
import Epilogue from '../components/Epilogue'
import Container from '../components/Container'
import FullScreenSection from '../components/FullScreenSection'
import Footer from '../components/Footer'

class IndexPage extends React.Component {
  constructor (props: {}) {
    super(props)
  }

  public componentDidMount() {
    // unregister previous events before re-registering
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')

    Events.scrollEvent.register('begin', (to, element) => {
      console.log('begin', arguments)
    })

    Events.scrollEvent.register('end', (to, element) => {
      console.log('end', arguments)
    })

    scrollSpy.update()
  }

  public render() {
    return (
      <React.Fragment>
        <Helmet
          meta={[
            { property: 'og:url', content: 'https://thebestmotherfucking.co/index.html' },
          ]}
        />
        <Intro />
        <About />
        <Features />
        <Epilogue />
        <Footer />
      </React.Fragment>
    )
  }
}

export default IndexPage
