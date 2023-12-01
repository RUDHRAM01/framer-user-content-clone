import React from 'react'

function Card(props) {
    return (
        <div className='featureCards'>
            <img src={props?.feature?.image} alt="" />
            <p style={{ padding: "10px 20px", fontSize: "20px", fontWeight: "600",margin:"0%" }}>
                {props?.feature?.title}
            </p>
            <p style={{marginTop:"0%",padding: "0px 20px",color:"#767575"}}>
                {props?.feature?.description}
            </p>
        </div>
    )
}

export default Card