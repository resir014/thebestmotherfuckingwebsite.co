import * as React from 'react'
import Link from 'gatsby-link'
import { Element, Events, scrollSpy, animateScroll as scroll } from 'react-scroll'

import Intro from '../components/Intro'
import About from '../components/About'
import Features from '../components/Features'
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
        <FullScreenSection name="epilogue">
          <Container>
            <h1>AND YES, THIS WHOLE THING IS <em>STILL</em> SATIRE, YOU DIPSHIT.</h1>
            <p>(todo)</p>
            <p>
              I'm gonna go out on a limb and end it on a positive note. Yes, it's{' '}
              true that the{' '}
              <a href="https://www.wired.com/2016/04/average-webpage-now-size-original-doom/">
                average webpage is now the size of the original DOOM
              </a>, but the average size of video games have grown exponentially{' '}
              grown as well. In fact, No Man's Sky tried to make their procedurally-generated{' '}
              game as small as it can. Look how well that turned out.
            </p>
            <p>
              Anyways, this website is made by <a href="https://resir014.github.io/">me</a>,{' '}
              and the domain name is generously donated by <a href="https://twitter.com/A7_145">him</a>.
            </p>
          </Container>
        </FullScreenSection>
        <Footer />
      </div>
    )
  }
}

export default IndexPage
