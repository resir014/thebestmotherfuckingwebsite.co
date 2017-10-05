import * as React from 'react'
import { Link as ScrollLink } from 'react-scroll'

import * as styles from './MastheadNavLink.module.scss'

interface MastheadLinkProps extends React.HTMLProps<HTMLLinkElement> {
  to: string
}

const MastheadLink: React.SFC<MastheadLinkProps> = ({ to, children }) => (
  <ScrollLink
    className={styles.mastheadNavLink}
    activeClass={styles.active}
    to={to}
    spy={true}
    offset={-60}
    smooth={true}
  >
    {children}
  </ScrollLink>
)

export default MastheadLink
