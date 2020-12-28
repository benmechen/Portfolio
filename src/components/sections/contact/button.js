import React from "react"
import PropTypes from "prop-types"

const Button = ({ title, ...props }) => (
    <button
        className="px-4 py-3 bg-white text-black border-2 border-white text-center hover:bg-black hover:text-white transition-all duration-200"
        {...props}
    >
        {title}
    </button>
)

Button.propTypes = {
    title: PropTypes.string.isRequired
}
export default Button
