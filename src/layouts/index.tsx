import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import { Masthead } from '../components/Masthead'

import 'typeface-rubik'
import 'typeface-open-sans'

import 'normalize.css'
import '../styles/globals.scss'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      tagline: string
      description: string
      author: {
        name: string
        url: string
      }
      siteUrl: string
    }
  }
}

const query = graphql`
  query IndexLayoutQuery {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
        siteUrl
      }
    }
  }
`

const IndexLayout: React.SFC = ({ children }) => {
  const data: StaticQueryProps = useStaticQuery(query)

  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          {
            name: 'keywords',
            content: 'web design, motherfucking website, motherfuckingwebsite'
          },
          { property: 'og:title', content: data.site.siteMetadata.title },
          { property: 'og:type', content: 'website' },
          { property: 'og:image', content: '/image-og.png' },
          { property: 'og:description', content: data.site.siteMetadata.description }
        ]}
      />
      <Masthead />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          paddingTop: '60px'
        }}
      >
        {children}
      </main>
    </>
  )
}

export default IndexLayout
