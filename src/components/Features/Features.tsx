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
      <Row style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={classnames(styles.featureBox, styles.guessWhat)}>
            <h2 style={{ color: 'black' }}>WELL, GUESS WHAT:</h2>
            <p>
              Look at this fucking beauty. It's sleek. It loads faster than you can even take a
              shit. And not to mention that it still has all the glory of a perfect-ass website:
            </p>
            <ul>
              <li>Shit loads fast, even with bloody React thrown into the mix.</li>
              <li>
                <em>Still</em> fits on all of your shitty screens.
              </li>
              <li>
                <em>Still</em> looks the same in all your shitty browsers.
              </li>
              <li>
                The motherfucker's <em>still</em> accessible to every asshole that visits your site
                <sup>
                  <small>[1]</small>
                </sup>
                .
              </li>
              <li>
                Uses some <em>actual</em> design elements, to further bring the point home.
              </li>
              <li>
                Is entirely{' '}
                <a href="https://github.com/resir014/thebestmotherfuckingwebsite.co">open source</a>
                .
              </li>
            </ul>
            <p>
              <small>
                <sup>[1]</sup> Okay, listen up here. HTML5 adoption in browsers has reached the
                tipping point. Unless you're one of those weirdos still using Windows fucking XP,
                then every shitty browser there is ― Edge, Safari, even Internet fucking Explorer ―
                has implemented the{' '}
                <a href="https://caniuse.com/" target="_blank">
                  core bits of HTML5
                </a>
                . No fucking excuses.
              </small>
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.featureImageBox}>
            <img src={require('./rucksack-magazine-386319.jpg')} />
            <div className={styles.credit}>
              <UnsplashCreditBadge src="https://unsplash.com/@rucksackmag?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">
                Rucksack Magazine
              </UnsplashCreditBadge>
            </div>
          </div>
        </Col>
      </Row>
      <Row reverse={true} style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={styles.featureBox}>
            <h2>MODERN JAVASCRIPT WITHOUT THE HEADACHE.</h2>
            <p>
              The JavaScript ecosystem is exploding like uncontained diarrhea, and in the middle of
              that overall page size on the Web also increased. So you might think that websites
              will load slower than ever.
            </p>
            <p>
              <strong>Wrong, motherfucker</strong>.
            </p>
            <p>
              Look at how fast this shit loads. It's faster than you can even take a shit. This
              website is rendered with{' '}
              <a href="https://www.gatsbyjs.org/" target="_blank">
                Gatsby.js
              </a>
              , a fawesome static-site generator powered by React which shits out pre-rendered
              static pages with extra optimization.
            </p>
            <p>
              And to make things better, the source code is written with static typing, so that the
              computer shames your shitty coding skills into fixing the inherent type errors in your
              fucking codebase. I use{' '}
              <a href="http://www.typescriptlang.org/" target="_blank">
                TypeScript
              </a>
              , it's fucking awesome.
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.featureImageBox}>
            <img src={require('./ryan-searle-345035.jpg')} />
            <div className={styles.credit}>
              <UnsplashCreditBadge src="https://unsplash.com/@ryansearle?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">
                Ryan Searle
              </UnsplashCreditBadge>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={styles.featureBox}>
            <h2>PERFORMANCE WITHOUT THE UNNECESSARY DIET.</h2>
            <p>
              Think your website is fat? Been thinking to take your website on an unnecessary diet?{' '}
              Stop the fuck right there. Your motherfucking website looks fine as it is, don't let
              anybody fucking tell you otherwise.
            </p>
            <p>
              But "page bloat", you say? Sure, back in ye olde Web 2.0 days, this was a problem. But
              the thing is, on the modern web, page bloat has become much less of a fucking issue{' '}
              than whether or not we should put in pineapple on a fucking pizza
              <sup>
                <small>[1]</small>
              </sup>
              . Especially when many tools do all the heavylifting of performance work for your lazy
              ass.
            </p>
            <p>
              <small>
                <sup>[1]</sup> Well hey, I don't care whatever the fuck you do to your pizza, I'm
                not your mom. So if it tastes good for you, then... why the hell not?
              </small>
            </p>
          </div>
        </Col>
        <Col style={{ position: 'relative' }}>
          <div className={classnames(styles.featureBox, styles.alternate)}>
            <p>
              Strap yourselves in, motherfuckers, because I'm going to introduce you to the{' '}
              <a
                href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/"
                target="_blank"
              >
                PRPL pattern
              </a>{' '}
              ― the Pilates of web development. <strong>Push</strong> your important resources of
              your initial route with <code>&lt;link rel="preload"&gt;</code> or{' '}
              <a href="https://en.wikipedia.org/wiki/HTTP/2" target="_blank">
                HTTP/2
              </a>
              . Only then you can <strong>render</strong> the initial route of your shitty-ass page.
              Inline your CSS too for good measure. If your CSS load blocks the rendering of your
              page, fuck you.
            </p>
            <p>
              Of course, chances are, your motherfucking website contains other child routes, like
              your shitty <code>/blog</code>, so <strong>pre-cache</strong> those motherfuckers.
              Then <strong>lazy-load</strong> them, meaning only load them when needed, and not
              during the initial page load.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    <div className={styles.featureFullscreenBackground}>
      <Container>
        <Row>
          <Col>
            <div className={styles.innerBox}>
              <h2>GOOD DESIGN WITHOUT THE TORTURE.</h2>
              <p>
                I'm gonna level with you. I'm suffering from a rare health condition known as
                "CSS-itis". It prevents me from doing productive shit with, and even touching a
                single line of CSS, if I could help it. I never thought I would see the light of
                day.
              </p>
              <p>
                Here's a solution: CSS-in-JS. I know it sounds counterintuitive, but hear me out.
                Designing React components is already a pain in the ass, especially with global
                styles. Thank fuck for{' '}
                <a href="https://github.com/css-modules/css-modules" target="_blank">
                  CSS Modules
                </a>
                , which breaks your CSS down to components, makes them importable in your
                JavaScript, and is also pairable with SCSS. There's also a lot of other options,
                like{' '}
                <a href="https://github.com/styled-components/styled-components" target="_blank">
                  Styled Components
                </a>
                ,{' '}
                <a href="https://emotion.sh/" target="_blank">
                  Emotion
                </a>
                ,{' '}
                <a href="https://github.com/paypal/glamorous" target="_blank">
                  glamorous
                </a>
                , etc.
              </p>
              <p>
                So here you go, all the goodness of React styling, rolled into this very page.
                Beautiful typography. And alignment. Also, light-coloured backgrounds are for
                losers. I like it dark. It's edgy as fuck. Plus, it doesn't hurt your fucking eyes
                when you're looking at this beauty for 16 hours straight.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.credit}>
        <UnsplashCreditBadge src="https://unsplash.com/@stairhopper?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">
          Alex Holyoake
        </UnsplashCreditBadge>
      </div>
    </div>
  </FullScreenSection>
)

export default Features
