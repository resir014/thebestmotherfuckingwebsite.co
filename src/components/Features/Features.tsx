import * as React from 'react'
import classnames from 'classnames'

import { Container } from '../Container'
import { Row } from '../Row'
import { Col } from '../Col'
import { FullScreenSection } from '../FullScreenSection'
import { UnsplashCreditBadge } from '../UnsplashCreditBadge'

import styles from './Features.module.scss'

import RucksackMagazine from './rucksack-magazine-386319.jpg'
import RyanSearle from './ryan-searle-345035.jpg'

export const Features = () => (
  <FullScreenSection name="features">
    <Container>
      <Row style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={classnames(styles.featureBox, styles.guessWhat)}>
            <h2 style={{ color: 'black' }}>WELL, GUESS WHAT:</h2>
            <p>
              Look at this fucking beauty. It&apos;s sleek. It loads faster than you can even take a
              shit. And not to mention that it still has all the glory of a perfect-ass website:
            </p>
            <ul>
              <li>Shit loads fast, even with all this fancystuffs thrown into the mix.</li>
              <li>
                <em>Still</em> fits on all of your shitty screens.
              </li>
              <li>
                <em>Still</em> looks the same in all your shitty browsers.
              </li>
              <li>
                The motherfucker&apos;s <em>still</em> accessible to every asshole that visits your
                site
                <sup>
                  <small>[1]</small>
                </sup>
                .
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
                tipping point. Unless you&apos;re one of those weirdos still using Windows fucking
                XP, then every shitty browser there is ― Edge, Safari, even Internet fucking
                Explorer ― has implemented the{' '}
                <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">
                  core bits of HTML5
                </a>
                . No fucking excuses.
              </small>
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.featureImageBox}>
            <img alt="Rucksack Magazine" src={RucksackMagazine} />
            <div className={styles.credit}>
              <UnsplashCreditBadge
                src="https://unsplash.com/@rucksackmag?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                author="Rucksack Magazine"
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row reverse style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <Col>
          <div className={styles.featureBox}>
            <h2>MODERN JAVASCRIPT WITHOUT THE HEADACHE.</h2>
            <p>
              The JavaScript ecosystem is exploding like uncontained diarrhea, and in the middle of
              that, the overall page size on the Web also increased. So you might think that
              websites will load slower than ever, shit will break, and we&apos;re inching one step
              closer to the heat death of the universe.
            </p>
            <p>
              <strong>Wrong, motherfucker</strong>.
            </p>
            <p>
              Look at how fast this shit loads. It&apos;s faster than you can even take a shit. This
              website is rendered with{' '}
              <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                Gatsby.js
              </a>
              , a fawesome static-site generator powered by React which shits out pre-rendered
              static pages with extra optimization built in.
            </p>
            <p>
              Even better than that, despite all of this newfangled ECMABabelFlowReasonTypeScript
              magic, you <em>can</em> still make things less suck. Strap yourselves in, folks.
            </p>
          </div>
        </Col>
        <Col>
          <div className={styles.featureImageBox}>
            <img alt="Ryan Searle" src={RyanSearle} />
            <div className={styles.credit}>
              <UnsplashCreditBadge
                src="https://unsplash.com/@ryansearle?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
                author="Ryan Searle"
              />
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
              Stop the fuck right there. Your motherfucking website looks fine as it is, don&apos;t
              let anybody fucking tell you otherwise.
            </p>
            <p>
              But &quot;page bloat&quot;, you say? Sure, back in ye olde Web 2.0 days, this was a
              problem. But the thing is, on the modern web, page bloat has become much less of a
              fucking issue than whether or not we should put in pineapple on a fucking pizza
              <sup>
                <small>[1]</small>
              </sup>
              .
            </p>
            <p>
              Especially when newfangled tools and techniques that makes it easier to optimize for
              that sweet, sweet Lighthouse score, that sweet, sweet first meaningful paint (FMP)
              time. Here&apos;s the key to all of these black magic:{' '}
              <strong>progressive enhancement</strong>.
            </p>
            <p>
              <small>
                <sup>[1]</sup> Well hey, I don&apos;t care whatever the fuck you do to your pizza,
                I&apos;m not your mom. So if it tastes good for you, then... why the hell not?
              </small>
            </p>
          </div>
        </Col>
        <Col style={{ position: 'relative' }}>
          <div className={classnames(styles.featureBox, styles.alternate)}>
            <p>
              Even when you got a shitload of scripts and fonts, you can wrap all the critical ones
              inside a <code>&lt;link rel=&quot;preload&quot;&gt;</code> tag. Thanks to{' '}
              <a
                href="https://en.wikipedia.org/wiki/HTTP/2"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTTP/2
              </a>
              , it will load all of them in parallel. Anything else, like below-the-fold images and
              scripts for other pages, can be pre-cached or lazyloaded.
            </p>
            <p>
              If your site has got a bunch of CSS shoved into it,{' '}
              <strong>only load what&apos;s critical for the page</strong>, and inline them for good
              measure. If your CSS load blocks the rendering of your page, fuck you.
            </p>
            <p>
              And should you ever get lost, the experts have been there and done that. Google has
              their own{' '}
              <a
                href="https://developers.google.com/web/fundamentals/performance/prpl-pattern/"
                target="_blank"
                rel="noopener noreferrer"
              >
                PRPL
              </a>{' '}
              method, and the Smashing Magazine has their own{' '}
              <a
                href="https://www.smashingmagazine.com/2019/01/front-end-performance-checklist-2019-pdf-pages/"
                target="_blank"
                rel="noopener noreferrer"
              >
                performance checklist
              </a>
              , both of which are worth checking out.
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
                I&apos;m gonna level with you. I&apos;m suffering from a rare health condition known
                as &quot;CSS-itis&quot;. It prevents me from doing productive shit with, and even
                touching a single line of CSS, if I could help it. I never thought I would see the
                light of day.
              </p>
              <p>
                Here&apos;s a solution: CSS-in-JS. I know it sounds counterintuitive, but hear me
                out. Designing through CSS is already a pain in the ass, especially with
                globally-scoped classes that will be happy to fuck you over when your CSS gets
                large. Thank fuck for{' '}
                <a
                  href="https://github.com/css-modules/css-modules"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSS Modules
                </a>
                , which takes your existing CSS and solves all of the scoping issues through some JS
                magic. There&apos;s also a lot of other options, like{' '}
                <a
                  href="https://github.com/styled-components/styled-components"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Styled Components
                </a>
                ,{' '}
                <a href="https://emotion.sh/" target="_blank" rel="noopener noreferrer">
                  Emotion
                </a>
                ,{' '}
                <a
                  href="https://github.com/paypal/glamorous"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  glamorous
                </a>
                , etc.
              </p>
              <p>
                So here you go, all the goodness of CSS-in-JS, rolled into this very page. Beautiful
                typography. And alignment. Also, light-coloured backgrounds are for losers. I like
                it dark. It&apos;s edgy as fuck. Plus, it doesn&apos;t hurt your fucking eyes when
                you&apos;re looking at this beauty for 16 hours straight.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className={styles.credit}>
        <UnsplashCreditBadge
          src="https://unsplash.com/@stairhopper?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge"
          author="Alex Holyoake"
        />
      </div>
    </div>
  </FullScreenSection>
)
