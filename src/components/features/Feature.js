import React from 'react'
import TagLine from '../landing/TagLine'

function Feature() {
    const data = {
        icon: "🔥",
        title1: "PREMIER FEATURES",
        size : {title1 : "50px"},
        title2: "Discover our product's",
        highlighted: "Capabilities",
        title4: "Don't settle for mediocrity - embrace the future of management with Manage Wise.",
    }
    return (
        <>
            <TagLine data={data} button={false} />
        </>
    )
}

export default Feature