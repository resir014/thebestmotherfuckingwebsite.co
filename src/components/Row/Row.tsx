import * as React from 'react'

import * as styles from './Row.module.scss'

interface RowProps extends React.HTMLProps<HTMLDivElement> {
}

const Row: React.SFC<RowProps> = ({ style, children }) => (
  <div className={styles.row} style={style}>
    {children}
  </div>
)

export default Row
