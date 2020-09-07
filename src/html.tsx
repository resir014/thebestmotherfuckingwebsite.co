/* eslint-disable jsx-a11y/html-has-lang */
/* eslint-disable react/no-danger */

import * as React from 'react'

interface HtmlProps {
  body: string
  htmlAttributes: Record<string, any>
  bodyAttributes: Record<string, any>
  preBodyComponents: React.ReactNodeArray
  postBodyComponents: React.ReactNodeArray
  headComponents: React.ReactNodeArray
}

export default function HTML({ htmlAttributes, headComponents, bodyAttributes, preBodyComponents, body, postBodyComponents }: HtmlProps) {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="144x144" href="/windows-tile-icon.png" />

        <link rel="apple-touch-icon" sizes="180x180" href="https://thebestmotherfuckingwebsite.co/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  )
}
