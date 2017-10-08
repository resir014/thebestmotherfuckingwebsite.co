import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Container from '../components/Container'
import FullScreenSection from '../components/FullScreenSection'

const NotFoundPage = () => (
  <div style={{ height: '100%' }}>
    <Helmet
      meta={[
        { property: 'og:url', content: 'https://thebestmotherfucking.co/404.html' },
      ]}
    />
    <FullScreenSection name="404">
      <Container>
        <h1>404 - Page not found.</h1>
        <p>You're on the wrong page, dumbass. <Link to="/">Click here</Link> to go back.</p>
      </Container>
    </FullScreenSection>
  </div>
)

export default NotFoundPage
