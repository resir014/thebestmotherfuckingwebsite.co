import * as React from 'react'

import { Container } from '../Container'

import styles from './Footer.module.scss'

export const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <hr className={styles.footerRule} />
      <p>
        <small>
          Inspired by{' '}
          <a href="http://motherfuckingwebsite.com/" target="_blank" rel="noopener noreferrer">
            these
          </a>{' '}
          <a href="http://bettermotherfuckingwebsite.com/" target="_blank" rel="noopener noreferrer">
            motherfucking
          </a>{' '}
          <a href="http://evenbettermotherfucking.website/" target="_blank" rel="noopener noreferrer">
            websites
          </a>
          .
        </small>
      </p>
      <p>
        <small>
          Images from{' '}
          <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">
            Unsplash
          </a>
          . Built with{' '}
          <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
            Gatsby
          </a>
          .
        </small>
      </p>
    </Container>
  </footer>
)
