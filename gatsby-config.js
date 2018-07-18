module.exports = {
  siteMetadata: {
    title: 'The Best Motherfucking Website',
    description: 'Your motherfucking websites got nothing compared to this beauty.',
    author: {
      name: 'Resi Respati',
      url: 'https://twitter.com/resir014',
      email: 'resir014@gmail.com'
    },
    siteUrl: 'https://thebestmotherfuckingwebsite.co'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://thebestmotherfuckingwebsite.co'
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-11448343-6'
      }
    },
    'gatsby-transformer-json',
    'gatsby-plugin-react-next',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet'
  ]
}
