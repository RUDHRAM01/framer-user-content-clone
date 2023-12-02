import React from 'react'
import TagLine from '../landing/TagLine'
import Card from './Card'
import { MdPhoneIphone } from "react-icons/md";
import { GoBell } from "react-icons/go";
import { FaFire } from "react-icons/fa6";

function MoreFeature({isMobile}) {
    const data = {
        icon: "🤩",
        title1: "AND MORE...",
        size: isMobile ? { title1: "30px" } : { title1: "50px" },
        color: "#fdf2ec",
        title2: "Explore an array of features that elevate your ",
        highlighted: "Productivity",
        title3: "to new heights",
        title4: "Discover the tools that will revolutionize the way you manage and optimize your operations",
    }

    const integration = {
        icon: "🛠",
        title1: "INTEGRATION",
        size: { title1: "50px" },
        color: "#fdf2ec",
        title2: "Enable ",
        highlighted: "integration",
        title3: "with other popular tools and platforms",
        title4: "Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.",
    }

    const moreCard = [
        {
            logo: <MdPhoneIphone style={{color:"white"}}/>,
            title: "Cross-Platform Compatibility",
            description: "Enjoy the flexibility of cross-platform compatibility. Our product works seamlessly across desktop, web, and mobile devices, allowing you to work from your preferred device."
        },
        {
            logo: <GoBell style={{color:"white"}}/>,
            title: "Stay Informed with Essential Notifications",
            description: "Automate support from first customer contact to closing the ticket. Drastically improve time to resolution.Automate support from first customer contact to closing the ticket."
        },
        {
            logo: <FaFire style={{color:"white"}}/>,
            title: "Secure Data Encryption at all times",
            description: "Trust in our robust data encryption to keep your sensitive information safe and secure. Rest easy knowing your data is protected at all times."
        }
    ]
    return (
        <div className='moreFeature'>
            <TagLine data={data} button={false} />
            <div className='moreCardContainer'>
                {moreCard.map((value, i) =>
                    <Card data={value} />
                )}
            </div>
            <TagLine data={integration} />
            <img src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024" alt="" />
        </div>
    )
}

export default MoreFeature