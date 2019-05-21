import * as React from 'react'

import styles from './UnsplashCreditBadge.module.scss'

import Image from './img.svg'

interface UnsplashCreditBadgeProps {
  src: string
  author: string
}

export const UnsplashCreditBadge: React.SFC<UnsplashCreditBadgeProps> = ({ src, author }) => (
  <a
    className={styles.unsplashCreditBadge}
    href={src}
    target="_blank"
    rel="noopener noreferrer"
    title={`Download free do whatever you want high-resolution photos by ${author} from Unsplash`}
  >
    <span>
      <img alt="Visit Page" src={Image} />
    </span>
    <span>{author}</span>
  </a>
)
