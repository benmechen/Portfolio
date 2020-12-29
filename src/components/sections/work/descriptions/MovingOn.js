import React from "react"
import TechnologyItem from "./TechnologyItem"

const MovingOnDescription = () => (
    <div className="text-black text-left w-full text-sm flex flex-col justify-between h-full overflow-y-scroll">
        <div>
            <p>
                Moving On Counselling required a new website for their
                counselling business. I worked with them to pick a Wordpress
                theme to suit their needs, then customise it to make it their
                own.
            </p>
            <p className="mt-1">
                SEO was a key requirement for this project, and I took great
                care to create a fast, indexable site aimed at achiving a high
                ranking in search engines.
            </p>
        </div>
        <div className="flex items-center justify-center">
            <TechnologyItem>Wordpress</TechnologyItem>
            <TechnologyItem>SEO</TechnologyItem>
        </div>
    </div>
)

export default MovingOnDescription
