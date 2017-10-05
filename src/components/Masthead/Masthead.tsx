import * as React from 'react'
import Link from 'gatsby-link'

import Container from '../Container'

import * as styles from './Masthead.module.scss'

const Masthead: React.SFC<{}> = () => (
  <header className={styles.masthead}>
    <Container>
      <div className={styles.mastheadTitle}>
        <Link to="/"><span className={styles.brand}>■</span> TBMFW</Link>
      </div>
      <nav className={styles.mastheadNav}>
        <a href="#">Intro</a>
        <a href="#">Something</a>
        <a href="#">Another</a>
      </nav>
    </Container>
  </header>
)

export default Masthead
