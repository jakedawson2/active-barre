module.exports = {
  siteMetadata: {
    title: "Active Barre",
    author: "Jake Dawson",
    description: "Taree's first boutique barre studio."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Active Barre',
        short_name: 'Barre',
        start_url: '/',
        background_color: '#7a7a7a',
        theme_color: '#7a7a7a',
        display: 'minimal-ui',
        icon: 'src/images/active-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
