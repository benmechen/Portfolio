import React, { useState } from "react"
import Layout from "../../layout"
import Card from "./card"
import Scroll from "./scroll"
import bother from "../../../images/bother.jpg"
import least from "../../../images/least.jpg"
import ride from "../../../images/ride.jpg"
import fe from "../../../images/fe.jpg"
import codeset from "../../../images/codeset.jpg"
import movingon from "../../../images/movingon.jpg"
import BotherDescription from "./descriptions/Bother"
import LeastDescription from "./descriptions/Least"
import FootballExchangeDescription from "./descriptions/FootballExchange"
import RideDescription from "./descriptions/Ride"
import CodeSetDescription from "./descriptions/CodeSet"
import MovingOnDescription from "./descriptions/MovingOn"

const WorkPage = (_, ref) => {
    const [hoverIndex, setHoverIndex] = useState(null)

    const cards = [
        {
            title: "Bother",
            image: bother,
            link: "https://webother.co.uk",
            description: <BotherDescription />
        },
        {
            title: "Least",
            image: least,
            link: "https://getleast.com",
            description: <LeastDescription />
        },
        {
            title: "Football Exchange",
            image: fe,
            link: "https://footballexchange.com",
            description: <FootballExchangeDescription />
        },
        {
            title: "Ride",
            image: ride,
            link:
                "https://apps.apple.com/gb/app/ride-friendly-lifts/id1455407107",
            description: <RideDescription />
        },
        {
            title: "CodeSet",
            image: codeset,
            link: "https://github.com/benmechen/CodeSet",
            description: <CodeSetDescription />
        },
        {
            title: "Moving On Counselling",
            image: movingon,
            link: "https://movingoncounselling.co.uk/",
            description: <MovingOnDescription />
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
