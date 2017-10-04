import * as React from 'react'
import Link from 'gatsby-link'

import Container from '../Container'

import * as styles from './Masthead.module.scss'

const Masthead: React.SFC<{}> = () => (
  <header className={styles.masthead}>
    <Container>
      <div className={styles.mastheadTitle}>
        <Link to="/">✨ TBMFW</Link>
      </div>
    </Container>
  </header>
)

export default Masthead
