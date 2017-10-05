import * as React from 'react'
import Link from 'gatsby-link'
import { Element } from 'react-scroll'

import Container from '../Container'
import Row from '../Row'
import Col from '../Col'
import FullScreenSection from '../FullScreenSection'
import UnsplashCreditBadge from '../UnsplashCreditBadge'

import * as styles from './Features.module.scss'

const Features = () => (
  <FullScreenSection name="features">
    <Container>
      <Row style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Col>
          <div className={styles.firstFeatureBox}>
            <h1 style={{ color: 'black' }}>WELL, GUESS WHAT:</h1>
            <p>
              Look at this fucking beauty. It's sleek. It loads. And it still has{' '}
              all the glory of a perfect-ass website, including, but not limited to:
            </p>
            <ul>
              <li>Shit <em>still</em> loads fast, even with these images.</li>
              <li><em>Still</em> fits on all of your shitty screens.</li>
              <li><em>Still</em> looks the same in all your shitty browsers.</li>
              <li>
                The motherfucker's <em>still</em> accessible to every asshole{' '}
                that visits your site<sup><small>[1]</small></sup>.
              </li>
              <li>
                And shit's <em>exponentially</em> more legible and could get{' '}
                every single one of my ramblings across, and into your thick fucking skull.
              </li>
            </ul>
            <p>
              <small>
                <sup>[1]</sup> Okay, listen the fuck up. HTML5 adoption in browsers{' '}
                has reached the tipping point. Unless you're one of those weirdos still using{' '}
                Windows fucking XP, then every shitty browser there is ― even Internet Explorer ―{' '}
                has implemented the <a href="https://caniuse.com/" target="_blank">core bits of HTML5</a>{' '}
                No fucking excuses.
              </small>
            </p>
          </div>
        </Col>
        <Col>
          <img src={require('./rucksack-magazine-386319.jpg')} />
        </Col>
      </Row>
    </Container>
    <Container style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
      <h1>PERFORMANCE WITHOUT THE UNNECESSARY DIET.</h1>
      <p>
        Think your website is fat? Been thinking to take your website on a diet?{' '}
        Stop the fuck right there. Your motherfucking website looks fine as it is,{' '}
        don't let anybody fucking tell you otherwise.
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
