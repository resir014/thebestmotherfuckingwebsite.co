import * as React from 'react'
import Link from 'gatsby-link'

import Container from '../Container'
import FullScreenSection from '../FullScreenSection'

const Epilogue: React.SFC<{}> = () => (
  <FullScreenSection name="epilogue">
    <Container>
      <h1>AND YES, THIS WHOLE THING IS <em>STILL</em> SATIRE, YOU DIPSHIT.</h1>
      <p>
        I'm gonna go out on a limb and end it on a positive note. Yes, it's true that the{' '}
        <a href="https://www.wired.com/2016/04/average-webpage-now-size-original-doom/">
          average webpage is now the size of the original DOOM
        </a>, but the average size of video games have exponentially grown as well. In fact, the developers of No Man's Sky{' '}
        tried to make their procedurally-generated game as small as they can. Look how well that turned out.
      </p>
      <p>
        My point is, sure, page bloat matters to a degree, but it matters less than what it used to be. Sure, the JavaScript platform{' '}
        is exploding like diarrhea, and we've seen a lot of shitty apps written in JavaScript as of late. But just like many other{' '}
        <a href="https://secure.php.net/" target="_blank">shitty languages</a>, <strong>the language itself is hardly an{' '}
        issue</strong>. Any <a href="https://en.wikipedia.org/wiki/Lennart_Poettering" target="_blank">bad developer</a> can take any{' '}
        platform/ecosystem and shit on it.
      </p>
      <blockquote>
        <p>&quot;Make Web Development Great Again? Actually, it's already great.&quot;</p>
        <cite>&mdash; Random American</cite>
      </blockquote>
      <p>
        Anyways, this website is made by <a href="https://resir014.xyz/">me</a>, and the domain name is generously donated by{' '}
        <a href="https://twitter.com/A7_145">him</a>. It's entirely open-source and available on{' '}
        <a href="https://github.com/resir014/thebestmotherfuckingwebsite.co">GitHub</a>.
      </p>
    </Container>
  </FullScreenSection>
)

export default Epilogue
