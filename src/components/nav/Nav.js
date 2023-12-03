import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import MobileMode from './MobileMode';


function Nav({ isMobile }) {
    const [mobileState,setMobileState] = useState(false)
    const Links = [
        {
            name: "Features",
            Link: ""
        },
        {
            name: "FAQ",
            Link: ""
        },
        {
            name: "Pricing",
            Link: ""
        },
        {
            name: "Testimonials",
            Link: ""
        }
    ]

    const handleChange = () => {
        setMobileState(!mobileState);
    }
    return (
        <>
            <div className='NavBar'>
                <div className='Logo'>
                    <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="Logo" width="180px" />
                </div>
                {isMobile ? <IoMenu style={{fontSize:"34px"}} onClick={()=>handleChange()}/> :
                    <div className='Links'>
                        {Links.map((value, i) =>
                            <p>
                                {value?.name}
                            </p>
                        )}
                        <button>
                            Buy Template
                        </button>
                    </div>
                }
                {isMobile && mobileState && <MobileMode handleChange={handleChange} /> }
            </div>
        </>
    )
}

export default Nav