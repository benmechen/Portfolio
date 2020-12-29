import React from "react"
import TechnologyItem from "./TechnologyItem"

const FootballExchangeDescription = () => (
    <div className="text-black text-left w-full text-sm flex flex-col justify-between h-full overflow-y-auto">
        <div>
            <p>
                Football Exchange is a mobile application centred around buying
                and selling shares in football players, individually and through
                indexes.
            </p>
            <p className="mt-1">
                As with Least, I architected the platform and lead the
                development team to deliver a high quality product. The
                trickiest part of this project was the trading engine and
                algorithms, as well as complying with UK gambling regulations.
            </p>
            <p className="mt-1">
                As the app accepted real money payments, security was one of the
                key focuses for us during development. We also had to make sure
                the system was scalable to handle load spikes around games, news
                events, etc.
            </p>
        </div>
        <div className="flex items-center justify-center flex-wrap">
            <TechnologyItem>React Native</TechnologyItem>
            <TechnologyItem>NodeJS</TechnologyItem>
            <TechnologyItem>NestJS</TechnologyItem>
            <TechnologyItem>GraphQL</TechnologyItem>
            <TechnologyItem>Typescript</TechnologyItem>
            <TechnologyItem>Kubernetes</TechnologyItem>
        </div>
    </div>
)

export default FootballExchangeDescription
