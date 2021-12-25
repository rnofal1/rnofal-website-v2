require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-emilia-core/gatsby-config.js
    siteTitle: `Ramsey Nofal`,
    siteTitleAlt: `Ramsey Nofal`,
    siteHeadline: `Ramsey Nofal`,
    siteUrl: `https://rnofal.com/`,
    siteDescription: `Ramsey Nofal Personal Website`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `Ramsey`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      // See the theme's README for all available options
      options: {
        name: 'Ramsey Nofal',
        location: 'United States',
        showThemeAuthor: false,
        formatString: 'MM.DD.YYYY',
        socialMedia: [
            {
                title: 'GitHub',
                href: 'https://github.com/rnofal1'
            },
            {
                title: 'LinkedIn',
                href: 'https://www.linkedin.com/in/rnofal/'
            },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ramsey Nofal`,
        short_name: `Ramsey`,
        description: `Personal Website`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
