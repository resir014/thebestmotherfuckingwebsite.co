import * as React from 'react'
import Link from 'gatsby-link'
import { Element } from 'react-scroll'

import Container from '../Container'
import FullScreenSection from '../FullScreenSection'

import * as styles from './Features.module.scss'

const Features = () => (
  <FullScreenSection name="features">
    <Container>
      <h1>PERFORMANCE WITHOUT THE UNNECESSARY DIET.</h1>
      <p>
        Think your website is fat? Been thinking to take your website on a diet?{' '}
        Stop the fuck right there. Your motherfucking website looks fine as it is,{' '}
        don't let anybody fucking tell you otherwise.
      </p>
    </Container>
    <Container>
      <h1>Feature2</h1>
      <p>
        Feature2
      </p>
    </Container>
    <Container>
      <h1>Feature3</h1>
      <p>
        Feature3
      </p>
    </Container>
  </FullScreenSection>
)

export default Features
