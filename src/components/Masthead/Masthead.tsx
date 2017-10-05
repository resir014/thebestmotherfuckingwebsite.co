import * as React from 'react'
import Link from 'gatsby-link'
import { Link as ScrollLink } from 'react-scroll'

import Container from '../Container'

import * as styles from './Masthead.module.scss'

const Masthead: React.SFC<{}> = () => (
  <header className={styles.masthead}>
    <Container>
      <div className={styles.mastheadInner}>
        <div className={styles.mastheadTitle}>
          <Link to="/"><span className={styles.brand}>■</span> TBMFW</Link>
        </div>
        <nav className={styles.mastheadNav}>
          <ScrollLink activeClass={styles.active} to="about" spy={true} smooth={true}>About</ScrollLink>
          <a href="#">Features</a>
          <a href="#">Epilogue</a>
        </nav>
      </div>
    </Container>
  </header>
)

export default Masthead
