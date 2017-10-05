import * as React from 'react'
import Link from 'gatsby-link'
import { Element } from 'react-scroll'

import Container from '../Container'
import FullScreenSection from '../FullScreenSection'

import * as styles from './Features.module.scss'

const Features = () => (
  <FullScreenSection name="features">
    <Container>
      <h1>Feature1</h1>
      <p>
        Feature1
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
