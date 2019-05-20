import * as React from 'react'
import Helmet from 'react-helmet'
import { Events, scrollSpy } from 'react-scroll'

import Intro from '../components/Intro'
import About from '../components/About'
import Features from '../components/Features'
import Epilogue from '../components/Epilogue'
import Footer from '../components/Footer'
import IndexLayout from '../layouts'

const IndexPage: React.FC = () => {
  React.useEffect(() => {
    Events.scrollEvent.register('end', () => {})
    scrollSpy.update()

    return () => {
      Events.scrollEvent.remove('end')
    }
  }, [])

  return (
    <IndexLayout>
      <Helmet
        meta={[{ property: 'og:url', content: 'https://thebestmotherfucking.co/index.html' }]}
      />
      <Intro />
      <About />
      <Features />
      <Epilogue />
      <Footer />
    </IndexLayout>
  )
}

export default IndexPage
