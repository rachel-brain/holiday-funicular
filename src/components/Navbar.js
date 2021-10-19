import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

// import ReactDOM from 'react-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// const element = <FontAwesomeIcon icon={faTimes} />

// ReactDOM.render(element, document.body)


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        };
    };

    useEffect(() => {
        showButton()
;
}, []);

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    {/* <i className={click ? 'fas fa-circle-xmark' : 'fas fa-bars'} /> */}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                            About us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Products' className='nav-links' onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Delivery' className='nav-links' onClick={closeMobileMenu}>
                            Delivery
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Testimonials' className='nav-links' onClick={closeMobileMenu}>
                            Testimonials
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Who' className='nav-links' onClick={closeMobileMenu}>
                            Who we are
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contact' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Contact us</Button>}
            </div>
        </nav>

        </>
    );
};

export default Navbar;