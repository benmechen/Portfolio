import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"

const Card = ({
    index,
    hoverIndex,
    setHoverIndex,
    title,
    image,
    link,
    children
}) => {
    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        setMobile(window.innerWidth < 768)
    }, [])

    return (
        <div
            className="rounded-lg shadow-2xl h-120 w-120 flex flex-col items-center p-4 bg-white mx-4 md:mx-12 transform transition-transform duration-200 hover:-translate-y-4"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            style={{
                zIndex: 10 - index,
                minWidth: 500,
                marginLeft: !isMobile && index > 0 ? -250 : undefined,
                transform:
                    hoverIndex !== null && index < hoverIndex
                        ? "translateX(-250px)"
                        : undefined
            }}
        >
            <h1 className="text-xl">{title}</h1>
            <a href={link} target="blank">
                <img src={image} alt={title} className="rounded" />
            </a>
            <span className="my-2"></span>
            {children}
        </div>
    )
}

Card.propTypes = {
    index: PropTypes.number.isRequired,
    hoverIndex: PropTypes.number,
    setHoverIndex: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
    children: PropTypes.node
}

export default Card
