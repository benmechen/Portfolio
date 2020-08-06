import PropTypes from "prop-types"
import React from "react"

const Layout = ({ children }) => {
    return (
        <section className="flex flex-col items-center justify-center content-center w-screen h-screen-header max-w-4xl px-4 mx-auto md:px-8 border-black">
            {children}
        </section>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
