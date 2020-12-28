import React from "react"
import PropTypes from "prop-types"

const Scroll = ({ children }) => (
    <div className="max-w-full">
        <div className="flex overflow-x-scroll py-12">{children}</div>
    </div>
)

Scroll.propTypes = {
    children: PropTypes.node
}
export default Scroll
