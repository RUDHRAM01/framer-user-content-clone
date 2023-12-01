import React from 'react'
import TagLine from '../landing/TagLine'
import Card from './Card'
function Feature() {
    const data = {
        icon: "🔥",
        title1: "PREMIER FEATURES",
        size: { title1: "50px" },
        title2: "Discover our product's",
        highlighted: "Capabilities",
        title4: "Don't settle for mediocrity - embrace the future of management with Manage Wise.",
    }

    const feature = [
        {
            image: "https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512",
            title: "Flexible Scheduling",
            description: "Stay productive with our flexible scheduling system"
        },
        {
            image: "https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512",
            title: "Easy Communication",
            description: "Collaborate seamlessly with your team in real-time"
        },
        {
            image: "https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512",
            title: "Analytics",
            description: "Gain valuable insights with our advanced analytics feature"
        }
    ]
    return (
        <>
            <div className='feature'>
                <TagLine data={data} button={false} />
                <div className='featureCard'>
                    <div className='card1'>
                        <span style={{ margin: "0%", backgroundColor: "white", width: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "40%", fontSize: "28px" }}>⭐️</span>
                        <p>
                            Boost productivity and streamline workflow with us. Enjoy our intuitive interface and robust features.
                        </p>
                    </div>
                    <div className='card2'>
                        <img src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png" alt="" />
                        <p style={{ padding: "10px 20px", fontSize: "20px", fontWeight: "600", margin: "0%" }}>
                            Smart Task Management
                        </p>
                        <p style={{ marginTop: "0%", padding: "0px 20px", color: "#767575" }}>
                            Say goodbye to chaos with our smart task management system
                        </p>
                    </div>
                    {feature.map((value, i) =>
                        <Card feature={value} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Feature