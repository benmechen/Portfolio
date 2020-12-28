import PropTypes from "prop-types"
import React from "react"

const Layout = ({ id, xPadding = true, className, children }, ref) => {
    return (
        <section
            ref={ref}
            id={id}
            className={`flex flex-col items-center justify-center content-center w-screen h-screen-header ${
                xPadding && "px-4 md:px-8"
            } mx-auto border-black ${className}`}
        >
            {children}
        </section>
    )
}

Layout.propTypes = {
    id: PropTypes.string,
    xPadding: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default React.forwardRef(Layout)
