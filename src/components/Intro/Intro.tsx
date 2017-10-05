import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import Container from '../Container'

import * as styles from './Intro.module.scss'

const Intro: React.SFC<{}> = ({}) => (
  <div className={styles.intro}>
    <div className={styles.introInner}>
      <Container>
        <h1>THIS IS THE BEST MOTHERFUCKING WEBSITE.</h1>
        <p>Your motherfucking websites got nothing compared to this beauty.</p>
      </Container>
    </div>
    <div className={styles.introScrollThingy}>
      <ScrollLink to="about" spy={true} smooth={true} offset={-60}>&#9660; scroll thingy &#9660;</ScrollLink>
    </div>
  </div>
)

export default Intro
