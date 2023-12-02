import React from 'react'

function Card(props) {
    return (
        <div className='planFeatureCard'>
            <div>
                <p className='type'>{props?.data?.type}</p>
                <p className='price'><span>{props?.data?.price}</span> /month</p>
                <div className='featureText'>
                    {props?.data?.features?.map((feature) =>
                        <p>{feature}</p>
                    )}
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "baseline" }}>
                <button>Get started</button>
            </div>
        </div>
    )
}

export default Card