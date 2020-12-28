import React from "react"
import PropTypes from "prop-types"

const Input = ({ label, large, className, ...props }) => (
    <div className="flex flex-col w-full">
        <label htmlFor={label} className="text-white text-xs font-light">
            {label}
        </label>
        {large ? (
            <textarea
                name={label}
                className={`px-4 py-2 border border-white text-white bg-transparent ${className}`}
                {...props}
            />
        ) : (
            <input
                name={label}
                className={`px-4 py-2 border border-white text-white bg-transparent ${className}`}
                {...props}
            />
        )}
    </div>
)

Input.propTypes = {
    label: PropTypes.string.isRequired,
    large: PropTypes.bool,
    className: PropTypes.string
}
export default Input
