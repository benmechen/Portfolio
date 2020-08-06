import React from "react"

import SEO from "../components/seo"
import HomePage from "../components/pages/home"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
    const { site } = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900 font-body">
            <SEO
                title="Ben Mechen | Full Stack Developer"
                keywords={[
                    `react`,
                    `developer`,
                    `full stack`,
                    `ios`,
                    `web`,
                    `portfolio`
                ]}
            />
            <Header />

            <main>
                <HomePage />
            </main>

            <footer className="bg-black">
                <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
                    <p className="text-white">
                        Created by{` `}
                        <a
                            className="font-bold no-underline"
                            href="https://bryant.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {site.siteMetadata.author}
                        </a>
                    </p>

                    <p>
                        <a
                            className="font-bold text-white no-underline"
                            href="https://github.com/taylorbryant/gatsby-starter-tailwind"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </p>
                </nav>
            </footer>
        </div>
    )
}

export default IndexPage
