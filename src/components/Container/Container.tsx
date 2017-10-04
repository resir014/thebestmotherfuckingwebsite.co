import * as React from 'react'
import Link from 'gatsby-link'

import * as styles from './Container.module.scss'

const Container: React.SFC<{}> = ({ children }) => (
  <div className={styles.container}>
    {children}
  </div>
)

export default Container
