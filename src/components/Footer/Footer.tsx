import * as React from 'react'

import Container from '../Container'
import Row from '../Row'
import Col from '../Col'

import * as styles from './Footer.module.scss'

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <hr className={styles.footerRule} />
      <p>
        Inspired by{' '}
        <a href="http://motherfuckingwebsite.com/">these</a>{' '}
        <a href="http://bettermotherfuckingwebsite.com/">motherfucking</a>{' '}
        <a href="http://evenbettermotherfucking.website/">websites</a>.
      </p>
      <p>
        Images from <a href="https://unsplash.com/" target="_blank">Unsplash</a>.
      </p>
    </Container>
  </footer>
)

export default Footer
