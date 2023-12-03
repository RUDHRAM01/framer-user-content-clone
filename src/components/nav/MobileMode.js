import React from 'react';
import { Modal } from 'react-bootstrap';
import { IoIosClose } from "react-icons/io";

function MobileMode({ handleChange }) {
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
        <Modal show={true}>
            <Modal.Body className='navModel'>
                <div style={{position:"fixed",top:"20px",left:"20px"}}>
                    <img src="https://framerusercontent.com/images/tgELERqZ0nObn14bTi418qTbg.png?scale-down-to=512" alt="" style={{width:"50%"}}/>
                </div>
                <div style={{position:"fixed",top:"20px",right:"20px"}}>
                    <IoIosClose style={{fontSize:"50px"}} onClick={()=>handleChange()}/>
                </div>
                {Links.map((value, i) =>
                    <p style={{fontWeight:"600"}}>
                        {value?.name}
                    </p>
                )}
                <button className='buyClass' style={{marginTop:"20px",width:"80%"}}>
                    Buy Template
                </button>
            </Modal.Body>
        </Modal>
    );
}

export default MobileMode;
