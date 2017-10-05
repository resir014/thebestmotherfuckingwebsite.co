import * as React from 'react'
import Link from 'gatsby-link'

import Intro from '../components/Intro'
import Container from '../components/Container'
import FullScreenSection from '../components/FullScreenSection'

const IndexPage: React.SFC<{}> = ({}) => (
  <div style={{ height: '100%' }}>
    <Intro />
    <FullScreenSection>
      <Container>
        <h1>LIKE SERIOUSLY, DOES IT EVEN FUCKING MATTER?</h1>
        <p>
          If you look at the granddaddies of motherfucking websites,{' '}
          <a href="http://motherfuckingwebsite.com">every</a>{' '}
          <a href="http://bettermotherfuckingwebsite.com">single</a>{' '}
          <a href="http://evenbettermotherfucking.website">one</a> of them{' '}
          say that websites are bloated, and therefore need to look fugly{' '}
          to stay lightweight. <strong>What a stupid idea.</strong>
        </p>
        <p>
          You guys fucking complain about page load while trying{' '}
          to load YouTube from your <a href="https://fiber.google.com/" target="_blank">Google Fiber</a>{' '}
          whereas I, a third-world country peasant, would cry tears of actual{' '}
          joy if broadband connection would ever graze my miserable existence.{' '}
          Y'all keep trying to pretend that page bloat is a big fucking issue,{' '}
          and that the existence of JavaScript has become a bane to humanity's{' '}
          shitty existence, yet forgot that web performance is something that requires{' '}
          some TLC and actual fucking effort.
        </p>
        <p>
          This is where <em>The Best Motherfucking Website</em> ― <strong>TBMFW</strong> ―{' '}
          comes in. To prove all you fuckers wrong, plus it also works as an{' '}
          eye bleach.
        </p>
        <p>Now I know you're probably thinking, really?</p>
      </Container>
    </FullScreenSection>
  </div>
)

export default IndexPage
