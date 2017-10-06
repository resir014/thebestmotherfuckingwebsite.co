import * as React from 'react'
import Link from 'gatsby-link'

import Container from '../Container'
import FullScreenSection from '../FullScreenSection'

import * as styles from './Epilogue.module.scss'

const Epilogue: React.SFC<{}> = () => (
  <FullScreenSection name="epilogue">
    <Container>
      <h1>AND YES, THIS WHOLE THING IS <em>STILL</em> SATIRE, YOU DIPSHIT.</h1>
      <p>
        I'm gonna go out on a limb and end it on a positive note. Yes, it's{' '}
        true that the{' '}
        <a href="https://www.wired.com/2016/04/average-webpage-now-size-original-doom/">
          average webpage is now the size of the original DOOM
        </a>, but the average size of video games have grown exponentially{' '}
        grown as well. In fact, No Man's Sky tried to make their procedurally-generated{' '}
        game as small as it can. Look how well that turned out.
      </p>
      <p>
        My point is, (todo).
      </p>
      <blockquote>
        <p>&quot;Make Web Development Great Again? Actually, it's already great.&quot;</p>
        <cite>&mdash; Random American</cite>
      </blockquote>
      <p>
        Anyways, this website is made by <a href="https://resir014.github.io/">me</a>,{' '}
        and the domain name is generously donated by <a href="https://twitter.com/A7_145">him</a>.
      </p>
    </Container>
  </FullScreenSection>
)

export default Epilogue
