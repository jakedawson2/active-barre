module.exports = {
  siteMetadata: {
    title: "Active Barre",
    author: "Jake Dawson",
    description: "Taree's first boutique studio offering a fusion of Barre, Pilates and fitness. Located in Pulteney street in the heart of Taree."
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
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-142783669-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
