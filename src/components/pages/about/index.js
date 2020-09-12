import React from "react"
import Layout from "../../layout"
import Experience from "./Experience/"

const AboutPage = (_, ref) => {
    return (
        <Layout className="bg-black w-screen py-12" ref={ref} id="about">
            <div className="flex flex-row w-full h-full" id="about">
                <div className="h-full w-1/2 text-center border-white border-r">
                    <h1 className="text-2xl text-white">About</h1>
                    <div className="pt-16">
                        <img src="https://picsum.photos/175" />
                    </div>
                </div>
                <div className="h-full w-1/2 text-center">
                    <h1 className="text-2xl text-white">Experience</h1>
                    <Experience />
                </div>
            </div>
        </Layout>
    )
}

export default React.forwardRef(AboutPage)
