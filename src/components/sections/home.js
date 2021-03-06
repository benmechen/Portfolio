import React, { useEffect } from "react"
import Layout from "../layout"
import Particles from "react-tsparticles"
import ParticleProps from "../../particles"

const HomePage = () => {
    useEffect(() => {
        const particleContainer = document.getElementById("tsparticles")
        particleContainer.style.width = "98vw"
    })

    return (
        <>
            <Particles
                className="h-screen-header absolute z-0 overflow-hidden"
                options={ParticleProps}
            />
            <Layout id="home">
                <div className="bg-black w-48 h-48 flex flex-row items-center justify-center content-center rounded-full relative">
                    <h1 className="text-3xl text-center text-white px-4 z-10">
                        Ben Mechen
                    </h1>
                    <div className="waves"></div>
                </div>
                <p className="mt-10 text-xl text-black typewriter z-10 bg-white border-black border-b"></p>
            </Layout>
        </>
    )
}

export default HomePage
