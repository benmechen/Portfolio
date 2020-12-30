import React from "react"
import Event from "./Event"

const Experience = () => {
    return (
        <div className="w-full h-full flex flex-col items-end relative md:p-10 text-right text-white">
            <Event
                title="Chelsea Apps"
                subtitle="Lead developer at Chelsea Apps"
            >
                While working at Chelsea Apps, I architected and built a number
                of large, complex projects, working closely with clients and
                designers to produce high quality products. I helped upskill the
                team of developers from front or back end only to full stack
                developers, and introduced a number of best practices and
                procedures to improve code quality:
                <ul className="list-disc list-outside text-right float-right clear-both">
                    <li>Code Reviews and Git best practices - </li>
                    <li>
                        Full testing scaffold, allowing us to catch issues
                        before production -
                    </li>
                    <li>
                        Moving from a rudimentary, unscalable infrastructure to
                        resilient and scalable container based deployements -
                    </li>
                    <li>
                        Introduction of CI/CD pipelines for all projects to
                        automate linting, testing and deployment -
                    </li>
                </ul>
            </Event>
            <Event title="Freelance" subtitle="Websites & App">
                Whilst at University, I worked on a number of personal and
                freelance websites and mobile apps for a number of clients.
            </Event>
            <Event
                title="University of Nottingham"
                subtitle="BSc Computer Science"
            >
                I studied Computer Science with Year in Industry from 2018 -
                2022 at the University of Nottingham, currently on track to
                graduate with a 1<sup>st</sup> class degree.
                <br />
                Here, I learned the fundamentals of computer science, software
                engineering, working as a team, and many other skills.
            </Event>
        </div>
    )
}

export default React.forwardRef(Experience)
