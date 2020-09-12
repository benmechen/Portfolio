import React from "react"
import Event from "./Event"

const Experience = () => {
    return (
        <div className="w-full h-full flex flex-col relative p-10 text-right text-white">
            <Event title="Chelsea Apps" subtitle="Lead developer at Chelsea Apps">
                While working at Chelsea Apps, I designed and built a number of high profile, large and complex projects, working closely
                with clients and designers to produce high quality products. I upskilled the team of 5 developers from front end to full stack developers,
                and introduced a number of industry best practices and procedures to increase the code quality:
                <ul className="list-disc list-outside text-right float-right clear-both">
                    <li>Code Reviews and Git best practices</li>
                    <li>Full unit testing of all components</li>
                    <li>Introduction of end-to-end and integration tests for smoke tests, to find deployment issues earlier</li>
                </ul>
            </Event>
            <Event title="University of Nottingham" subtitle="BSc Computer Science">
                I studied Computer Science with Year in Industry from 2018 - 2022 at the University of Nottingham, currently on track to graduate
                with a 1<sup>st</sup> class degree.
            </Event>
        </div>
    )
}

export default React.forwardRef(Experience)