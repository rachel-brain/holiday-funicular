import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <p>Pastry Master coming soon ...</p>
                <Link to='/' className='roll-icon'>
                    <i className='fas fa-toilet-paper-blank' />     
                    {/* <i className='fa-solid fa-toilet-paper-blank' /> */}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times fa-2xl' : 'fas fa-bars'} />
                    {/* <i className={click ? 'fas fa-circle-xmark' : 'fas fa-bars'} /> */}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/delivery' className='nav-links' onClick={closeMobileMenu}>
                            Delivery
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/testimonials' className='nav-links' onClick={closeMobileMenu}>
                            Testimonials
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/who' className='nav-links' onClick={closeMobileMenu}>
                            Who We are
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>

        </>
    )
}

export default Navbar