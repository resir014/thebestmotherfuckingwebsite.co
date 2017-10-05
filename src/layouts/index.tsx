import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Masthead from '../components/Masthead'

import 'typeface-nunito'
import 'typeface-open-sans'
import 'typeface-lora'

import '../styles/globals.scss'
import 'prism-themes/themes/prism-atom-dark.css'

interface WrapperProps {
  children: () => any
  data: {
    site: {
      siteMetadata: {
        title: string
        tagline: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
  }
}

const TemplateWrapper: React.SFC<WrapperProps> = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
        { name: 'keywords', content: 'web design, motherfucking website, motherfuckingwebsite' },
      ]}
    />
    <Masthead />
    <main style={{ height: '100%', paddingTop: '50px' }}>
      {children()}
    </main>
  </div>
)

export default TemplateWrapper

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title,
        description,
        author {
          name,
          url
        }
      }
    }
  }
`
