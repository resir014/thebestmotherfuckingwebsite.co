import * as React from 'react'
import Helmet from 'react-helmet'

import { Intro } from '../components/Intro'
import { About } from '../components/About'
import { Features } from '../components/Features'
import { Epilogue } from '../components/Epilogue'
import { Footer } from '../components/Footer'
import IndexLayout from '../layouts'

const IndexPage: React.FC = () => {
  return (
    <IndexLayout>
      <Helmet meta={[{ property: 'og:url', content: 'https://thebestmotherfucking.co/index.html' }]} />
      <Intro />
      <About />
      <Features />
      <Epilogue />
      <Footer />
    </IndexLayout>
  )
}

export default IndexPage
