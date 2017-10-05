import * as React from 'react'
import Link from 'gatsby-link'
import { Element } from 'react-scroll'
import * as classnames from 'classnames'

import Container from '../Container'
import Row from '../Row'
import Col from '../Col'
import FullScreenSection from '../FullScreenSection'
import UnsplashCreditBadge from '../UnsplashCreditBadge'

import * as styles from './Features.module.scss'

const Features = () => (
  <FullScreenSection name="features">
    <Container>
      <Row style={{ paddingBottom: '3rem' }}>
        <Col>
          <div className={styles.featureBox}>
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
            <p style={{ fontSize: '80%' }}>
              <small>
                <sup>[1]</sup> Okay, listen the fuck up. HTML5 adoption in browsers{' '}
                has reached the tipping point. Unless you're one of those weirdos still using{' '}
                Windows fucking XP, then every shitty browser there is ― Edge, Safari, even{' '}
                Internet fucking Explorer ― has implemented the{' '}
                <a href="https://caniuse.com/" target="_blank">core bits of HTML5</a>.{' '}
                No fucking excuses.
              </small>
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.featureImageBox}>
            <img src={require('./rucksack-magazine-386319.jpg')} />
            <div className={styles.credit}>
              <UnsplashCreditBadge
                src="https://unsplash.com/@rucksackmag?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
              >
                Rucksack Magazine
              </UnsplashCreditBadge>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
        <Col>
          <h1>Feature3</h1>
          <p>
            Feature3
          </p>
        </Col>
      </Row>
      <Row style={{ paddingTop: '3rem' }}>
        <Col>
          <div className={styles.featureBox}>
            <h1>PERFORMANCE WITHOUT THE UNNECESSARY DIET.</h1>
            <p>
              Think your website is fat? Been thinking to take your website on a diet?{' '}
              Stop the fuck right there. Your motherfucking website looks fine as it is,{' '}
              don't let anybody fucking tell you otherwise.
            </p>
            <p>
              But "page bloat", you say? Sure, back in ye olde Web 2.0 days, this was a problem{' '}
              But the thing is, on the modern web, page bloat has become much less of a fucking issue{' '}
              than whoever the fuck's in charge of the USA right now. Especially when many tools{' '}
              do all the heavylifting of performance work for your lazy ass.
            </p>
          </div>
        </Col>
        <Col style={{ position: 'relative' }}>
          <div className={classnames(styles.featureBox, styles.alternate)}>
            <p>
              Strap yourselves in, motherfuckers, because I'm going to introduce you to the{' '}
              <a href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/" target="_blank">PRPL pattern</a>{' '}
              ― the Pilates of web development. <strong>Push</strong> your important fucking resources of your initial route with{' '}
              <code>&lt;link rel="preload"&gt;</code>, or HTTP/2 if you're hipster as fuck. Only then{' '}
              you can fucking <strong>render</strong> the initial route of your shitty-ass page. Inline{' '}
              your fucking CSS for good measure. If your CSS load blocks the rendering of your page, fuck you.
            </p>
            <p>
              Of course, chances are, your motherfucking website contains other child routes, like your{' '}
              shitty <code>/blog</code>, so <strong>pre-cache</strong> those motherfuckers. Then <strong>lazy-load</strong>{' '}
              them, meaning only fucking load them when needed, and not during the initial page load.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </FullScreenSection>
)

export default Features
