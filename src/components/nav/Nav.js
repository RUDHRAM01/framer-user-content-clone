import React from 'react'

function Nav() {
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
                    <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="Logo" width="180px"/>
                </div>
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
            </div>
        </>
    )
}

export default Nav