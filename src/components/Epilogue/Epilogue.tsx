import * as React from 'react'

import Container from '../Container'
import FullScreenSection from '../FullScreenSection'

const Epilogue: React.SFC = () => (
  <FullScreenSection name="epilogue">
    <Container>
      <h1>
        AND YES, THIS WHOLE THING IS <em>STILL</em> SATIRE, YOU DIPSHIT.
      </h1>
      <p>
        I&apos;m gonna end this motherfucking rant with some positivity. My point is, yes, it&apos;s
        true that the{' '}
        <a
          href="https://www.wired.com/2016/04/average-webpage-now-size-original-doom/"
          target="_blank"
          rel="noopener noreferrer"
        >
          average webpage is now the size of the original DOOM
        </a>
        . Sure, websites are getting more and more bloated. But all of these matter less than what
        they used to be. In fact, the developers of No Man&apos;s Sky tried to make their
        procedurally-generated game as small as they can. Look how well that turned out.
      </p>
      <p>
        This whole increase in size is natural, but also, recent innovation in web development has
        made it easier to make your codebase less shit. When one door closes, another one opens
        wide. What matters is how can you optimize for that sweet, sweet Lighthouse score, that
        sweet, sweet first meaningful paint (FMP) time. Be it by code splitting, preloading your
        essentials, lazyloading your shit, or whatever kind of black magic you came up with. I
        don&apos;t care, it&apos;s your app. I don&apos;t make the rules.
      </p>
      <p>
        And sure, the JavaScript platform is exploding like diarrhea, and we&apos;ve seen a lot of
        shitty apps written in JavaScript as of late. But just like many other{' '}
        <a href="https://secure.php.net/" target="_blank" rel="noopener noreferrer">
          shitty languages
        </a>
        , <strong>the language itself is hardly an issue</strong>. Any{' '}
        <a
          href="https://en.wikipedia.org/wiki/Lennart_Poettering"
          target="_blank"
          rel="noopener noreferrer"
        >
          bad developer
        </a>{' '}
        can take any platform/ecosystem and shit on it. But amongst the dark alleyways filled with
        piles of shit, there&apos;s still a majority of people trying their hardest to make things
        better for everyone.
      </p>
      <blockquote>
        <p>
          &quot;Hey you know the best way to write apps? The way that ends up with an app.&quot;
        </p>
        <cite>
          &mdash;{' '}
          <a
            href="https://twitter.com/ken_wheeler/status/1022443093679845377"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ken Fucking Wheeler
          </a>
        </cite>
      </blockquote>
      <p>
        Anyways, this website is made by{' '}
        <a href="https://resir014.xyz/" target="_blank" rel="noopener noreferrer">
          me
        </a>
        , and the domain name is generously donated by{' '}
        <a href="https://twitter.com/A7_145" target="_blank" rel="noopener noreferrer">
          him
        </a>
        . It&apos;s entirely open-source and available on{' '}
        <a
          href="https://github.com/resir014/thebestmotherfuckingwebsite.co"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </Container>
  </FullScreenSection>
)

export default Epilogue
