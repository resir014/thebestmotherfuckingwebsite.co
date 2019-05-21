import * as React from 'react'
import { Element } from 'react-scroll'

import styles from './FullScreenSection.module.scss'

interface FullScreenSectionProps {
  name: string
}

const FullScreenSection: React.SFC<FullScreenSectionProps> = ({ name, children }) => (
  <Element name={name} className={styles.fullScreenSection}>
    <div className={styles.fullScreenSectionInner}>{children}</div>
  </Element>
)

export default FullScreenSection
