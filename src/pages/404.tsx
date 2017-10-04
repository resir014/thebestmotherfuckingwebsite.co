import * as React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>404 - Page not found.</h1>
    <p>You're on the wrong page, dumbass. <Link to="/">Click here</Link> to go back.</p>
  </div>
)

export default NotFoundPage
