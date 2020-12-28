import React, { useState } from "react"
import Layout from "../../layout"
import Card from "./card"
import Scroll from "./scroll"
import bother from "../../../images/bother.png"
import least from "../../../images/least.png"
import ride from "../../../images/ride.png"
import fe from "../../../images/fe.png"
import codeset from "../../../images/codeset.png"
import movingon from "../../../images/movingon.png"

const WorkPage = (_, ref) => {
    const [hoverIndex, setHoverIndex] = useState(null)

    const cards = [
        {
            title: "Bother",
            image: bother,
            link: "https://webother.co.uk"
        },
        {
            title: "Least",
            image: least,
            link: "https://getleast.com"
        },
        {
            title: "Football Exchange",
            image: fe,
            link: "https://footballexchange.com"
        },
        {
            title: "Ride",
            image: ride,
            link:
                "https://apps.apple.com/gb/app/ride-friendly-lifts/id1455407107"
        },
        {
            title: "CodeSet",
            image: codeset,
            link: "https://github.com/benmechen/CodeSet",
            description: "I built this."
        },
        {
            title: "Moving On Counselling",
            image: movingon,
            link: "https://movingoncounselling.co.uk/",
            description: "I built this."
        }
    ]

    return (
        <Layout
            className="bg-white w-screen py-16"
            xPadding={false}
            ref={ref}
            id="work"
        >
            <h1 className="text-2xl text-black mt-12">Projects</h1>
            <Scroll>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        index={index}
                        hoverIndex={hoverIndex}
                        setHoverIndex={setHoverIndex}
                        title={card.title}
                        image={card.image}
                        link={card.link}
                    >
                        {card.description}
                    </Card>
                ))}
            </Scroll>
        </Layout>
    )
}

export default React.forwardRef(WorkPage)
