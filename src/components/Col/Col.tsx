import * as React from 'react'

import styles from './Col.module.scss'

export const Col: React.SFC<React.HTMLProps<HTMLDivElement>> = ({ style, children, ...rest }) => (
  <div className={styles.col} style={style} {...rest}>
    {children}
  </div>
)
