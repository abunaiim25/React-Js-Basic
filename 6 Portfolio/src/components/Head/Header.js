import React, { useState } from 'react';
import "./Header.css";
import logo from "../pic/logo.png"

const Header = () => {

    //header top
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        header.classList.toggle("active", window.scrollY > 100)
      })

    //toggle menu for mobile
    const [Mobile, setMobile] = useState(false);

    return (
        <>
            <header className='header'>
                <div className='container d_flex'>
                   
                    <div className='logo'>
                        <img  style={{ width: "40px",marginTop:"13px"  }}  src={logo} alt='' />
                    </div>

                    <div className='navlink  '>
                        
                      {/**  <ul className='link uppercase f_flex'> */} 
                            <ul className={Mobile ? "nav-links-mobile uppercase" : "link f_flex uppercase"} onClick={()=> setMobile(false)}>

                            <li> <a href='#home'>home</a></li>
                            <li> <a href='#features'>features</a></li>
                            <li><a href='#portfolio'>portfolio</a></li>
                            <li><a href='#resume'>resume</a></li>
                            <li><a href='#clients'>clients</a></li>
                            <li><a href='#blog'>blog</a></li>
                            <li><a href='#contact'>contact</a></li>
                            <li><button className='home-btn'>Log In</button></li>
                        </ul>

                        <button className='toggle' onClick={() => setMobile(!Mobile)}>
                            {
                                Mobile ?
                                <i className='fas fa-times close home-btn'></i> :  <i className='fas fa-bars open'></i>
                            }
                           
                        </button>
                    </div>
                </div>
            </header>

            <section className='demo'></section>
        </>
    )
}

export default Header
