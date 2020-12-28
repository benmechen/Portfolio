import React, { useState, useRef } from "react"
import PropTypes from "prop-types"

const Event = ({ title, subtitle, selected, children }) => {
    const content = useRef(null)
    const [isHover, setHover] = useState(false)

    return (
        <div
            className={`border-white border-r pr-10 py-2 cursor-default opacity-${
                selected ? 100 : 50
            } hover:opacity-100 transition-opacity duration-200 w-5/6`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <h3 className="text-xl">{title}</h3>
            <p className="text-sm transition-all transform duration-200">
                {subtitle}
            </p>
            <div
                ref={content}
                className={`text-xs font-light transition-all transform duration-500 overflow-hidden leading-relaxed text-gray-200`}
                style={{
                    maxHeight: isHover
                        ? `${content.current.scrollHeight}px`
                        : "0px"
                }}
            >
                {children}
            </div>
        </div>
    )
}

Event.propTypes = {
    title: PropTypes.element.isRequired,
    subtitle: PropTypes.element.isRequired,
    children: PropTypes.node,
    selected: PropTypes.bool
}

export default Event
