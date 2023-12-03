import React from 'react'
import TagLine from '../landing/TagLine'

function Join({isMobile}) {
    const data = {
        icon: "🤩",
        title1: "DON'T MISS OUT",
        size: isMobile ? { title1: "20px",fb : "10px" } : { title1: "30px" },
        title2: "Unleash your",
        highlighted: "Potential",
        title3: "with us",
        title4: "Join our community of ambitious individuals and organizations eager to make a difference.",
    }


    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }} className='joinContainer'>
            <div className='joinBox'>
                <div>
                    <TagLine data={data} button={true} buttonS={false} value="Try out now" style={{}} />
                </div>
                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "8px", fontWeight: "600" }} className='happyContainer'>
                    <p className='happyButton' style={{ backgroundColor: "white" }}>
                        <span style={{ color: "#8247ff" }}>200+</span> Happy users
                    </p>
                    <div className='joinImgCon'>
                        <img className='joinImg1' src="https://framerusercontent.com/images/S4kVG1FFzSqxr8zOqpvJRfsBad0.png?scale-down-to=1024" alt=""  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join