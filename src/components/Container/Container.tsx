import * as React from 'react'
import Link from 'gatsby-link'

import * as styles from './Container.module.scss'

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {}

const Container: React.SFC<ContainerProps> = ({ style, children }) => (
  <div className={styles.container} style={style}>
    {children}
  </div>
)

export default Container
