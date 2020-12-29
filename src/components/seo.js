import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

function SEO({ description, lang, meta, keywords, title }) {
    const { site } = useStaticQuery(graphql`
        query DefaultSEOQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
        }
    `)

    useEffect(() => {
        window.dataLayer = window.dataLayer || []
        function gtag() {
            window.dataLayer.push(arguments)
        }
        gtag("js", new Date())

        gtag("config", "G-H9WMHPM3VJ")
    }, [])

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                }
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `)
                          }
                        : []
                )
                .concat(meta)}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        >
            <link
                href="https://fonts.googleapis.com/css2?family=Arvo:wght@200;300;400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-H9WMHPM3VJ"
            ></script>
        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    keywords: [],
    meta: []
}

SEO.propTypes = {
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.array,
    title: PropTypes.string.isRequired
}

export default SEO
