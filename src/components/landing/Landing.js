import React from 'react';
import Nav from '../nav/Nav';
import TagLine from './TagLine';

function Landing() {
    const data = {
        icon: "👋",
        title1: "WELCOME TO MANAGE WISE!",
        size : {title1 : "74px"},
        title2: "Empower your business with",
        highlighted: "Strategic",
        title3: "insights",
        title4 : "Powerful management platform designed to streamline your business operations, boost productivity, and drive success"
    }
    return (
        <div className='landing'>
            <Nav />
            <TagLine data={data} button={true} />
        </div>
    )
}

export default Landing