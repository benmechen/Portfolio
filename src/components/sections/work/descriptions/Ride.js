import React from "react"
import TechnologyItem from "./TechnologyItem"

const RideDescription = () => (
    <div className="text-black text-left w-full text-sm flex flex-col justify-between h-full">
        <div>
            <p>
                Ride was a native iOS application designed around lift sharing;
                using a location based system based around groups of friends to
                match people looking for lifts with people looking to earn some
                side money offering lifts.
            </p>
            <p className="mt-1">
                The app included user to user direct payments, mapping, KYC
                handling, direct messaging, an advanced price calculation
                algorithm using the car&apos;s MPG and journey length, and bill
                sharing between multiple passengers.
            </p>
        </div>
        <div className="flex items-center justify-center">
            <TechnologyItem>Swift</TechnologyItem>
            <TechnologyItem>UIKit</TechnologyItem>
            <TechnologyItem>Stripe</TechnologyItem>
            <TechnologyItem>Firebase</TechnologyItem>
        </div>
    </div>
)

export default RideDescription
