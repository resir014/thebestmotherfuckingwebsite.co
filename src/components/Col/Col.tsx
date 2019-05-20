import * as React from 'react'

import * as styles from './Col.module.scss'

interface ColProps extends React.HTMLProps<HTMLDivElement> {}

const Col: React.SFC<ColProps> = ({ style, children }) => (
  <div className={styles.col} style={style}>
    {children}
  </div>
)

export default Col
