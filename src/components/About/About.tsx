import * as React from 'react'
import Link from 'gatsby-link'

import Container from '../Container'
import FullScreenSection from '../FullScreenSection'

const About = () => (
  <FullScreenSection name="about">
    <Container>
      <h1>LIKE SERIOUSLY, DOES IT EVEN FUCKING MATTER?</h1>
      <p>
        If you look at the granddaddies of motherfucking websites,{' '}
        <a href="http://motherfuckingwebsite.com">every</a>{' '}
        <a href="http://bettermotherfuckingwebsite.com">single</a>{' '}
        <a href="http://evenbettermotherfucking.website">one</a> of them say that websites are
        bloated, and therefore need to look fugly to stay lightweight.{' '}
        <strong>What a stupid idea.</strong>
      </p>
      <p>
        You guys fucking complain about page load while trying to load YouTube from your{' '}
        <a href="https://fiber.google.com/" target="_blank">
          Google Fiber
        </a>{' '}
        whereas I, a third-world country peasant, would cry tears of actual joy if true broadband
        connection would ever reach us. Y'all keep trying to pretend that page bloat is a big
        fucking issue, and that the existence of JavaScript has become a bane to humanity's shitty
        existence, yet forgot that web performance is something that requires some TLC and actual
        fucking effort, and all of the page bloat hoohah doesn't even matter as much anymore.
      </p>
      <p>
        This is where <em>The Best Motherfucking Website</em> ― <strong>TBMFW</strong> ― comes in.
        To prove all you fuckers wrong, plus it also works as an eye bleach.
      </p>
      <p>Now I know you're probably thinking, really?</p>
    </Container>
  </FullScreenSection>
)

export default About
