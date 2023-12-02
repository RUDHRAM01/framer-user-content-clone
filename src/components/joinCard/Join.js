import React from 'react'
import TagLine from '../landing/TagLine'

function Join() {
    const data = {
        icon: "🤩",
        title1: "DON'T MISS OUT",
        size: { title1: "50px" },
        title2: "Unleash your",
        highlighted: "Potential",
        title3: "with us",
        title4: "Join our community of ambitious individuals and organizations eager to make a difference.",
    }


    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }} className='joinContainer'>
            <div className='joinBox'>
                <TagLine data={data} button={true} buttonS={false} value="Try out now" />
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px", fontWeight: "600", fontSize: "24px" }} className='happyContainer'>
                    <p className='happyButton' style={{ backgroundColor: "white" }}>
                        <span style={{ color: "#8247ff" }}>200+</span> Happy users
                    </p>
                    <div style={{ position: "relative" }}>
                        <img src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=1024" alt="" style={{ width: "80%" }} />
                        <img src="https://framerusercontent.com/images/584hzJDnWCS5SFABKjaCzgDspY.png?scale-down-to=512" alt="" style={{ position: "absolute", bottom: 0, right: 0, width: "100%" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join