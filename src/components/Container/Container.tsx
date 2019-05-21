import * as React from 'react'

import styles from './Container.module.scss'

const Container: React.SFC<React.HTMLProps<HTMLDivElement>> = ({ style, children, ...rest }) => (
  <div className={styles.container} style={style} {...rest}>
    {children}
  </div>
)

export default Container
