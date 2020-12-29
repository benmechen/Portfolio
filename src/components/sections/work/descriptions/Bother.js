import React from "react"
import TechnologyItem from "./TechnologyItem"

const BotherDescription = () => (
    <div className="text-black text-left w-full text-sm flex flex-col justify-between h-full">
        <div>
            <p>
                Bother is a web app that looks to change the way we shop by
                automating the usually dull process of shopping for
                non-perishable goods through intelligent machine learning.
            </p>
            <p className="mt-1">
                I helped develop many parts of Bother, and took on maintaining
                the project going forwards.
            </p>
        </div>
        <div className="flex items-center justify-center">
            <TechnologyItem>React</TechnologyItem>
            <TechnologyItem>NextJS</TechnologyItem>
            <TechnologyItem>NodeJS</TechnologyItem>
            <TechnologyItem>Shopify</TechnologyItem>
        </div>
    </div>
)

export default BotherDescription
