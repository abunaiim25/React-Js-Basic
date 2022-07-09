import React from 'react';
import logo from "../pic/logo.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className='conatiner text-center top'>
                    <div className='img'>
                        <img style={{ width:"60px", height: "60px" }} src={logo} alt='' />
                    </div>
                    <p className='text-center'>© 2021. All rights reserved by Abu-Naiim.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
