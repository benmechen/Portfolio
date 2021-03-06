import React, { useState } from "react"
import PropTypes from "prop-types"
import Layout from "../../layout"
import Experience from "./Experience"
import headshot from "../../../images/headshot.jpg"

const AboutPage = (_, ref) => {
    return (
        <Layout
            className="bg-black w-screen py-12 overflow-y-auto"
            ref={ref}
            id="about"
        >
            <div className="flex flex-row flex-wrap w-full h-full" id="about">
                <div className="min-h-full w-full md:w-1/2 text-center md:border-white md:border-r pr-2">
                    <h1 className="text-2xl text-white">About</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 items-start mt-16">
                        <div className="col-span-1 ml-4 md:ml-0">
                            <img src={headshot} />
                        </div>
                        <div className="text-white col-span-2 text-left ml-4 mt-4 md:mt-0">
                            <p className="font-medium">
                                Hey 👋! I&apos;m a full stack web and app
                                developer from Bournemouth.
                            </p>
                            <p className="mt-4 font-light text-sm">
                                I&apos;ve worked on a number of projects of
                                varying complexity over 3 years of professional
                                development. These projects have been in a
                                number of technologies, including HTML, CSS, JS,
                                PHP, Node, MySQL, Postgres, MongoDB, Firebase,
                                and more.
                            </p>
                            <p className="mt-4 font-light text-sm">
                                My speciality is web &amp; mobile apps requiring
                                complex backend systems. My focus is on building
                                secure, fast, and reliable applications,
                                utilising technology such as Kubernetes to
                                deliver scalable infrastructure.
                            </p>
                            <p className="mt-4 font-light text-sm">
                                I strive to deliver high quality, maintainable
                                code, focusing on unit testing, documentation,
                                and architecture.
                            </p>
                        </div>
                        <div className="col-span-1 text-left">
                            <h2 className="text-xl text-white">Technologies</h2>
                            <div className="text-xs text-white flex flex-wrap mt-2">
                                <TechnologyItem>NodeJS</TechnologyItem>
                                <TechnologyItem>NestJS</TechnologyItem>
                                <TechnologyItem>Typescript</TechnologyItem>
                                <TechnologyItem>
                                    React &amp; React Native
                                </TechnologyItem>
                                <TechnologyItem>Postgres</TechnologyItem>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-h-full w-full md:w-1/2 text-center mt-10 pt-10 border-white border-t md:mt-0 md:pt-0 md:border-t-0">
                    <h1 className="text-2xl text-white">Experience</h1>
                    <Experience />
                </div>
            </div>
        </Layout>
    )
}

export default React.forwardRef(AboutPage)

const TechnologyItem = ({ children }) => {
    const [isHover, setHover] = useState(false)

    return (
        <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="border border-white py-1 px-2 w-auto m-1 cursor-default transition-all duration-200"
            style={{
                boxShadow: `${isHover ? "4" : "2"}px ${
                    isHover ? "4" : "2"
                }px 0px 0px rgba(255,255,255,1)`
            }}
        >
            {children}
        </span>
    )
}

TechnologyItem.propTypes = {
    children: PropTypes.string.isRequired
}
