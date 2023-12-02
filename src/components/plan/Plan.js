import React from 'react'
import TagLine from '../landing/TagLine'
import Card from './Card'

function Plan({isMobile}) {
    const data = {
        icon: "💲",
        title1: "PRICING",
        size: isMobile ? { title1: "30px" } : { title1: "50px" },
        title2: "Select your ideal",
        highlighted: "Pricing",
        title3: "plan",
        title4: "At Manage Wise, we believe in providing you with pricing plans that adapt to your unique needs.",
    }
    const plans = [
        {
            type: "FREE",
            price: "$0",
            features: [
                "Access to all basic features", "Reporting and analytics", "Up to 5 individual users", "Chat and email support"
            ]
        },
        {
            type: "STANDARD",
            price: "$25",
            features: [
                "Access to all basic features", "Reporting and analytics", "Up to 5 individual users", "Chat and email support", "3+ integrations", "Account performance reporting"
            ]
        },
        {
            type: "BUSINESS",
            price: "$42",
            features: [
                "Access to all basic features", "Reporting and analytics", "Up to 5 individual users", "Chat and email support", "Account performance reporting"
            ]
        }
    ]
    return (
        <div className='plan'>
            <TagLine data={data} />
            <div className='planCard'>
                {plans.map((value, i) =>
                    <Card data={value} i={i} />
                )}
            </div>
        </div>
    )
}

export default Plan