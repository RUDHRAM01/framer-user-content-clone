import React from 'react';
import Nav from '../nav/Nav';
import TagLine from './TagLine';

function Landing({ isMobile }) {
    
    const data = {
        icon: "👋",
        title1: "WELCOME TO MANAGE WISE!",
        size : isMobile ? {title1 : "40px"} : {title1 : "74px"},
        title2: "Empower your business with",
        highlighted: "Strategic",
        title3: "insights",
        title4 : "Powerful management platform designed to streamline your business operations, boost productivity, and drive success"
    }
    return (
        <div className='landing'>
            <Nav isMobile={isMobile} />
            <TagLine data={data} button={true} buttonS={true} value="Get Started" />
        </div>
    )
}

export default Landing