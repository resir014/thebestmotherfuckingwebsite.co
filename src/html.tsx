import * as React from 'react'

let styles: string
if (process.env.NODE_ENV === 'production') {
  try {
    styles = require('!raw-loader!../public/styles.css')
  } catch (e) {
    console.log(e)
  }
}

interface HtmlProps {
  body: any
  preBodyComponents: any
  postBodyComponents: any
  headComponents: any
}

module.exports = class HTML extends React.Component<HtmlProps, void> {
  render() {
    let css
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: styles }}
        />
      )
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          {this.props.headComponents}
          {css}
        </head>
        <body>
          {this.props.preBodyComponents}
          <div
            key={'body'}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
