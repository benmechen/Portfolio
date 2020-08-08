import React, { useRef } from "react"

import SEO from "../components/seo"
import Header from "../components/header"
import { useStaticQuery, graphql } from "gatsby"
import HomePage from "../components/pages/home"
import AboutPage from "../components/pages/about"

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

    const aboutRef = useRef()

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
            <Header aboutRef={aboutRef} />

            <main>
                <HomePage />
                <AboutPage ref={aboutRef} />
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
                            className="font-bold text-white no-underline mr-4"
                            href="https://github.com/benmechen/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        <a
                            className="font-bold text-white no-underline"
                            href="https://www.linkedin.com/in/ben-mechen-84407b108/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </p>
                </nav>
            </footer>
        </div>
    )
}

export default IndexPage
