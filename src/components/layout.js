import PropTypes from "prop-types"
import React from "react"

const Layout = ({ id, className, children }, ref) => {
    return (
        <section ref={ref} id={id} className={`flex flex-col items-center justify-center content-center w-screen h-screen-header px-4 mx-auto md:px-8 border-black ${className}`}>
            {children}
        </section>
    )
}

Layout.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node.isRequired
}

export default React.forwardRef(Layout)
