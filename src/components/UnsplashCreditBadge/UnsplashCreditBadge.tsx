import * as React from 'react'

import * as styles from './UnsplashCreditBadge.module.scss'

interface UnsplashCreditBadgeProps {
  src: string
}

const UnsplashCreditBadge: React.SFC<UnsplashCreditBadgeProps> = ({ src, children }) => (
  <a
    className={styles.unsplashCreditBadge}
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    title="Download free do whatever you want high-resolution photos from Unsplash"
  >
    <span>
      <img src={require('./img.svg')} />
    </span>
    <span>
      {children}
    </span>
  </a>
)

export default UnsplashCreditBadge
