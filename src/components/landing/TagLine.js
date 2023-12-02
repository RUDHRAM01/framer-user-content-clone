import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
function TagLine(props) {
    const flexStart = props?.style ? true : false
    return (
        <div className='TagLine' style= {flexStart ? {textAlign: "start",justifyContent:"flex-start",alignItems:"flex-start",  padding: "80px 80px"} : {  padding: "80px 0px"}}>
            <p className='child1'>
                <span>{props?.data?.icon}</span> {props?.data?.title1}
            </p>
            <p className='child2' style={{ fontSize: `${props?.data?.size?.title1}`, color: props?.data?.color ? props?.data?.color : "black" }}>
                {props?.data?.title2} <span style={{ color: "#fe8162" }}>{props?.data?.highlighted}</span> {props?.data?.title3}
            </p>
            {props?.data?.title4 &&
                <p className='child3'>
                    {props?.data?.title4}
                </p>
            }
            {props?.button &&
                <div className='child4'>
                    <button className='firstButt'>{props?.value}</button>
                    {props?.buttonS &&
                        <button className='lastButt'>Watch Demo <FaCirclePlay /></button>
                    }
                </div>
            }
        </div>
    )
}

export default TagLine