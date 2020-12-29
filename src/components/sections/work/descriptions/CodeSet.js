import React from "react"
import TechnologyItem from "./TechnologyItem"

const CodeSetDescription = () => (
    <div className="text-black text-left w-full text-sm flex flex-col justify-between h-full">
        <p>
            CodeSet was my personal A Level Computing coursework. It is a web
            application designed to teach KS3 students Python in the classroom
            through a series of interactive tutorials, with a gamified process
            allowing students to compete with each other by climing the class
            leaderboard. Teachers are able to manage multiple classes, add
            students, and set homework deadlines.
        </p>
        <div className="flex items-center justify-center">
            <TechnologyItem>PHP</TechnologyItem>
            <TechnologyItem>HTML</TechnologyItem>
            <TechnologyItem>CSS</TechnologyItem>
            <TechnologyItem>MySQL</TechnologyItem>
        </div>
    </div>
)

export default CodeSetDescription
