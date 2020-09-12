import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"

const Header = ({ aboutRef }) => {
    const [isExpanded, toggleExpansion] = useState(false)
    const [navBackground, setNavBackground] = useState("white")

    const navRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            console.log(navRef.current.getBoundingClientRect(), aboutRef.current.getBoundingClientRect())
            if (aboutRef.current.getBoundingClientRect().y <= navRef.current.getBoundingClientRect().height)
                setNavBackground("black")
            else 
                setNavBackground("white")
        }

        document.addEventListener('scroll', handleScroll)

        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [navBackground])

    return (
        <header className={`bg-${navBackground} transition-all duration-300 text-black sticky top-0 h-16 z-50`} ref={navRef}>
            <div className="flex flex-wrap items-center justify-between max-w-full p-4 mx-auto">
                <Link to="/">
                    <h1 className={`flex items-center no-underline font-serif font-bold text-xl ${navBackground === "white" ? "text-black" : "text-white"}`}>
                        BM
                    </h1>
                </Link>

                <button
                    className="flex items-center px-3 py-2 border border-white rounded md:hidden"
                    onClick={() => toggleExpansion(!isExpanded)}
                >
                    <svg
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>

                <nav
                    className={`${
                        isExpanded ? `block` : `hidden`
                    } md:flex md:items-center w-full md:w-auto`}
                >
                    {[
                        {
                            route: `/#about`,
                            title: `About`
                        },
                        {
                            route: `/#work`,
                            title: `Work`
                        },
                        {
                            route: `/#contact`,
                            title: `Contact`
                        }
                    ].map((link) => (
                        <Link
                            className={`block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 border-b border-transparent hover:border-black ${navBackground === "white" ? "text-black" : "text-white"}`}
                            key={link.title}
                            to={link.route}
                        >
                            {link.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    )
}

Header.propTypes = {
    aboutRef: PropTypes.element.isRequired
}

export default Header
