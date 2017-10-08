import * as React from 'react'
import Link from 'gatsby-link'
import { Element } from 'react-scroll'

import * as styles from './FullScreenSection.module.scss'

interface FullScreenSectionProps {
  name: string
}

const FullScreenSection: React.SFC<FullScreenSectionProps> = ({ name, children }) => (
  <Element name={name} className={styles.fullScreenSection}>
    <div className={styles.fullScreenSectionInner}>
      {children}
    </div>
  </Element>
)

export default FullScreenSection
