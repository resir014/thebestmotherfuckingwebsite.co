import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import styles from './MastheadNavLink.module.scss'

interface MastheadLinkProps extends React.HTMLProps<HTMLLinkElement> {
  to: string
}

export const MastheadNavLink: React.SFC<MastheadLinkProps> = ({ to, children }) => (
  <ScrollLink
    className={styles.mastheadNavLink}
    activeClass={styles.active}
    to={to}
    spy
    offset={-60}
    smooth
  >
    {children}
  </ScrollLink>
)
