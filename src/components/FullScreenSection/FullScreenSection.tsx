import * as React from 'react'
import Link from 'gatsby-link'

import * as styles from './FullScreenSection.module.scss'

const FullScreenSection: React.SFC<{}> = ({ children }) => (
  <div className={styles.fullScreenSection}>
    <div className={styles.fullScreenSectionInner}>
      {children}
    </div>
  </div>
)

export default FullScreenSection
