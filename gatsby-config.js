const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
    siteMetadata: {
        title: `Ben Mechen`,
        description: `Full stack web and app developer based in Dorset.`,
        author: `Ben Mechen`,
        siteUrl: `https://ben.mechen.co`
    },
    plugins: [
        `gatsby-plugin-eslint`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-advanced-sitemap`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Ben Mechen`,
                short_name: `starter`,
                start_url: `/`,
                background_color: fullConfig.theme.colors.white,
                theme_color: fullConfig.theme.colors.teal["400"],
                display: `minimal-ui`,
                icon: `src/images/icon.png`
            }
        },
        {
            resolve: `gatsby-plugin-postcss`,
            options: {
                postCssPlugins: [
                    require(`tailwindcss`)(tailwindConfig),
                    require(`autoprefixer`),
                    ...(process.env.NODE_ENV === `production`
                        ? [require(`cssnano`)]
                        : [])
                ]
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    "G-H9WMHPM3VJ" // Google Analytics / GA
                ]
            }
        }
    ]
}
