import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>

            <NavLink className='nav-link' to="/" >Home</NavLink>
            <NavLink className='nav-link' to="/blog" >Blog</NavLink>
            <NavLink className='nav-link' to="/add-blog" >Add Blog</NavLink>
            <NavLink className='nav-link' to="/contact" >Contact</NavLink>

            {/* <Link className='nav-link' to="/" >Home</Link>
     <Link className='nav-link' to="blog" >Blog</Link>
     <Link className='nav-link' to="/contact" >Contact</Link> */}

        </nav>
    )
}

export default Navbar
