import * as React from 'react'
import * as classnames from 'classnames'

import * as styles from './Row.module.scss'

interface RowProps extends React.HTMLProps<HTMLDivElement> {
  reverse?: boolean
}

const Row: React.SFC<RowProps> = ({ style, reverse, children }) => (
  <div className={classnames(styles.row, reverse ? styles.reversed : '')} style={style}>
    {children}
  </div>
)

export default Row
