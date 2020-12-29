import React, { useState } from "react"
import PropTypes from "prop-types"

const TechnologyItem = ({ children }) => {
    const [isHover, setHover] = useState(false)

    return (
        <span
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="border border-black py-1 px-2 w-auto m-1 rounded-full cursor-default transition-all duration-200"
            style={{
                boxShadow: `${isHover ? "4" : "2"}px ${
                    isHover ? "4" : "2"
                }px 0px 0px rgba(0,0,0,1)`
            }}
        >
            {children}
        </span>
    )
}

TechnologyItem.propTypes = {
    children: PropTypes.string.isRequired
}

export default TechnologyItem
