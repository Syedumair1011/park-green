import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHeart, faMoneyCheck, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import ParkGreensLogo from '../assets/park-greens-logo.png';

function Navbar() {
    const [showFullNumber, setShowFullNumber] = useState(false);
    const halfNumber = '+971 55 774 ';
    const fullNumber = '+971 55 774 6715';

    const handleShowNumber = () => {
        setShowFullNumber(true);
    };

    const navbarStyle = {
        backgroundColor: 'black'
    };

    const iconContainerStyle = {
        border: '1px solid transparent',
        borderRadius: '50%',
        padding: '5px',
        transition: 'border-color 0.3s',
    };

    const handleIconHover = (event) => {
        event.target.style.borderColor = 'goldenrod';
    };

    const handleIconLeave = (event) => {
        event.target.style.borderColor = 'transparent';
    };

    return (
        
        <nav className="navbar navbar-expand-lg navbar-fixed-top" style={navbarStyle}>
            <div className="container">
                <a className="navbar-brand navbar-fixed-top" href="#">
                    <img src={ParkGreensLogo} alt="" width="170" height="50" className="d-inline-block align-text-top" />
                </a>
                <div className="d-flex justify-content-end align-items-center flex-grow-1">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span className="nav-link d-none d-lg-block" tabIndex="-1" aria-disabled="true">
                            {showFullNumber ? fullNumber : (
                                <span>
                                    {halfNumber}
                                    <Link to='' onClick={handleShowNumber} style={{ border: '1px solid', borderRadius: '5px', backgroundColor: "#e9d362", color: 'black', padding: '2px' }}>Show</Link>
                                </span>
                            )}
                        </span>
                        <div className="dropdown d-none d-lg-block">
                            <span className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faGlobe} className="heart-icon" /> EN / AED
                            </span>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Comming Soon</a></li>
                            </ul>
                        </div>
                       
                        <div className="d-lg-block">
                            <button className="btn btn-xs">
                                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
                            </button>
                        </div>
                        <div className="d-lg-block">
                            <a href='https://api.whatsapp.com/send?phone=971557746715' target='_blank'>
                                <button className="btn btn-xs">
                                    <FontAwesomeIcon icon={faWhatsapp} className="heart-icon" />
                                </button>
                            </a>
                        </div>
                        <div className="d-lg-block">
                        <button style={{backgroundColor: '#e9d362'}}  className="navbar-toggler btn btn-xs" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faToggleOn} className="heart-icon" />
                    </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
