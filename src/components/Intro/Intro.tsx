import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import Container from '../Container'
import UnsplashCreditBadge from '../UnsplashCreditBadge'

import * as styles from './Intro.module.scss'

const Intro = () => (
  <div className={styles.intro}>
    <div className={styles.introInner}>
      <Container>
        <h1>THIS IS THE BEST MOTHERFUCKING WEBSITE.</h1>
        <p>Your motherfucking websites got nothing compared to this beauty.</p>
      </Container>
    </div>
    <ScrollLink className={styles.introScrollThingy} to="about" smooth={true} offset={-60}>
      &#9660; scroll thingy &#9660;
    </ScrollLink>
    <div className={styles.credit}>
      <UnsplashCreditBadge src="https://unsplash.com/@levibare1?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">
        Levi Bare
      </UnsplashCreditBadge>
    </div>
  </div>
)

export default Intro
