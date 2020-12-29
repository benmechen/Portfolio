import React from "react"
import TechnologyItem from "./TechnologyItem"

const LeastDescription = () => (
    <div className="text-black text-left w-full text-sm flex flex-col justify-between h-full">
        <div>
            <p>
                Least is a web app aiming to provide faster commercial leasing
                using a digital, collaborative approach.
            </p>
            <p className="mt-1">
                I architected the platform and lead the development team to
                deliver a high quality product. The hardest part of this project
                was the complex data flows, requiring many moving parts to
                provide a user friendly app and simplify the leasing process.
            </p>
        </div>
        <div className="flex items-center justify-center">
            <TechnologyItem>React</TechnologyItem>
            <TechnologyItem>NodeJS</TechnologyItem>
            <TechnologyItem>GraphQL</TechnologyItem>
            <TechnologyItem>Typescript</TechnologyItem>
        </div>
    </div>
)

export default LeastDescription
