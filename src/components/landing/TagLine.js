import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
function TagLine(props) {
    return (
        <div className='TagLine'>
            <p className='child1'>
                <span>{props?.data?.icon}</span> {props?.data?.title1}
            </p>
            <p className='child2' style={{fontSize : `${props?.data?.size?.title1}`}}>
                {props?.data?.title2} <span style={{ color: "#fe8162" }}>{props?.data?.highlighted}</span> {props?.data?.title3}
            </p>
            {props?.data?.title4 &&
                <p className='child3'>
                    {props?.data?.title4}
                </p>
            }
            {props?.button &&
                <div className='child4'>
                    <button>Get Started</button>
                    <button>Watch Demo <FaCirclePlay /></button>
                </div>
            }
        </div>
    )
}

export default TagLine