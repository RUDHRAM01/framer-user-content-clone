import React from 'react';
import { IoMenu } from "react-icons/io5";

function Nav({ isMobile }) {
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
    return (
        <>
            <div className='NavBar'>
                <div className='Logo'>
                    <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="Logo" width="180px" />
                </div>
                {isMobile ? <IoMenu style={{fontSize:"34px"}}/> :
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
            </div>
        </>
    )
}

export default Nav