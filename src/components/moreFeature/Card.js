import React from 'react'


function Card(props) {
    return (
        <div className='moreCard'>
            <div style={{fontSize:"40px",backgroundColor:"#8247ff",display:"flex",alignItems:"center",justifyContent:"center",padding:"10px",borderRadius:"50%"}}>
                {props?.data?.logo}
            </div>
            <p style={{ color: "white", fontSize: "24px", fontWeight: "600", marginBottom: "0%" }}>{props?.data?.title}</p>
            <p style={{ color: "#767575", fontWeight: "500", wordSpacing: "1px" }}>{props?.data?.description}</p>
        </div>
    )
}

export default Card